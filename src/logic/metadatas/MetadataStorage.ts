import { Message } from "discord.js";
import { CommandMessage } from "../../types/public/CommandMessage";
import {
  DOn,
  DDiscord,
  DGuard,
  Client,
  DCommand,
  DCommandNotFound,
  ArgsOf,
  DiscordEvents,
  RuleBuilder,
  Modifier,
  DecoratorUtils,
  Rule,
  SimpleArgsRules
} from "../..";
import { Expression, ArgsRules } from '../../types';

export class MetadataStorage {
  private static _instance: MetadataStorage;
  private _events: DOn[] = [];
  private _commands: DCommand[] = [];
  private _commandNotFounds: DCommandNotFound[] = [];
  private _guards: DGuard[] = [];
  private _discords: DDiscord[] = [];
  private _modifiers: Modifier<any>[] = [];

  static get instance() {
    if (!this._instance) {
      this._instance = new MetadataStorage();
    }
    return this._instance;
  }

  static clear() {
    this._instance = new MetadataStorage();
  }

  get events() {
    return this._events as ReadonlyArray<DOn>;
  }

  addModifier(modifier: Modifier<any>) {
    this._modifiers.push(modifier);
  }

  addOn(on: DOn) {
    this._events.push(on);
  }

  addCommand(on: DCommand) {
    this._commands.push(on);
    this.addOn(on);
  }

  addCommandNotFound(on: DCommandNotFound) {
    this._commandNotFounds.push(on);
    this.addOn(on);
  }

  addGuard(guard: DGuard) {
    this._guards.push(guard);
  }

  addDiscord(discord: DDiscord) {
    this._discords.push(discord);
  }

  async build(client: Client) {
    // Link the events with their instances
    this._events.map((on) => {
      const instance = this._discords.find((instance) => {
        return instance.classRef === on.from;
      });
      on.linkedInstance = instance;
    });

    await Modifier.applyFromModifierListToList(this._modifiers, this._commands);
    await Modifier.applyFromModifierListToList(this._modifiers, this._discords);

    this._events.map((on) => {
      if (!on.linkedInstance) {
        console.log(on, "The class isn't decorated by @Discord");
        return;
      }

      on.guards = DecoratorUtils.getLinkedObjects(on, this._guards);
      on.compileGuardFn(client);
    });
  }

  trigger<Event extends DiscordEvents>(event: Event, client: Client, once: boolean = false) {
    const responses: any[] = [];

    let eventsToExecute = this._events.filter((on) => {
      return on.event === event && on.once === once && !(on instanceof DCommandNotFound);
    });

    return async (...params: ArgsOf<Event>) => {
      let paramsToInject: any = params;
      const isMessage = event === "message";
      let isCommand = false;
      let notFoundOn;

      const onCommands = (await Promise.all(this.events.map(async (on) => {
        if (isMessage && on instanceof DCommand) {
          isCommand = true;
          let pass = false;

          const message = params[0] as Message;
          const commandMessage = CommandMessage.create(message);

          // Flatten all the @Discord rules
          const computedDiscordRules = (await Promise.all(
            on.linkedInstance.argsRules.map(async (ar) => await ar(commandMessage))
          )).reduce<SimpleArgsRules[]>((prev, cdr) => {
            if (Array.isArray(cdr)) {
              return [
                ...prev,
                ...cdr
              ];
            } else {
              prev.push(cdr);
            }
            return prev;
          }, []).reduce((prev, cor) => {
            return [
              ...prev,
              ...RuleBuilder.fromArray(cor.rules)
            ];
          }, []);

          // Call all the rules callbacks
          const computedOnRules = await Promise.all(
            on.argsRules.map(async (ar) => {
              if (typeof ar === "function") {
                return await ar(commandMessage);
              }
              return ar;
            })
          );

          // Flatten the rules for the methods and merge it to the @Discord rules
          const flatOnRules = computedOnRules.reduce<SimpleArgsRules<RuleBuilder>[]>((prev, cor) => {
            if (Array.isArray(cor)) {
              cor.map((cor) => this.transformRules(computedDiscordRules, cor));
              return [
                ...prev,
                ...(cor as any as SimpleArgsRules<RuleBuilder>[])
              ];
            } else {
              this.transformRules(computedDiscordRules, cor);
              prev.push(cor as any as SimpleArgsRules<RuleBuilder>);
            }
            return prev;
          }, []);

          pass = flatOnRules.some((rule) => {
            return rule.rules[0].regex.test(message.content);
          });

          if (!pass) {
            notFoundOn = on.linkedInstance.commandNotFound;
          } else {
            paramsToInject = message;
          }

          if (pass) {
            return on;
          }
        }
        return undefined;
      }))).filter(c => c);

      if (isCommand) {
        if (onCommands.length > 0) {
          eventsToExecute = onCommands;
        } else if (notFoundOn) {
          eventsToExecute = [notFoundOn];
        }
      }

      for (const on of eventsToExecute) {
        const res = await on.getMainFunction<Event>()(paramsToInject, client);
        if (res.executed) {
          responses.push(res.res);
        }
        if (res.on instanceof DCommandNotFound) {
          break;
        }
      }
      return responses;
    };
  }

  transformRules(toMerge: RuleBuilder[], argsRules: SimpleArgsRules) {
    argsRules.rules = [
      ...toMerge,
      ...RuleBuilder.fromArray(argsRules.rules)
    ];
    argsRules.rules = [
      RuleBuilder.join(Rule(argsRules.separator), ...(argsRules.rules as RuleBuilder[]))
    ];
    return argsRules;
  }
}
