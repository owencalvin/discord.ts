(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{382:function(t,s,a){"use strict";a.r(s);var n=a(44),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"sharding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sharding"}},[t._v("#")]),t._v(" Sharding")]),t._v(" "),a("p",[t._v("Sharding your bot with "),a("code",[t._v("@typeit/discord")]),t._v(".")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#purpose"}},[t._v("Purpose")])]),a("li",[a("a",{attrs:{href:"#before-you-start"}},[t._v("Before you start")]),a("ul",[a("li",[a("a",{attrs:{href:"#what-if-my-bot-is-in-less-than-2-000-servers"}},[t._v("What if my bot is in less than 2,000 servers?")])]),a("li",[a("a",{attrs:{href:"#what-if-my-bot-does-not-compile-with-tsc"}},[t._v("What if my bot does not compile with tsc?")])])])]),a("li",[a("a",{attrs:{href:"#i-m-ready"}},[t._v("I'm Ready")])]),a("li",[a("a",{attrs:{href:"#running"}},[t._v("Running")])]),a("li",[a("a",{attrs:{href:"#that-s-it"}},[t._v("That's it")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"purpose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#purpose"}},[t._v("#")]),t._v(" Purpose")]),t._v(" "),a("p",[t._v("Sharding is the process of splitting your main discord process into multiple shards to help with the load when your bot is in 2,500+ guilds. discord."),a("strong",[t._v("js")]),t._v(" has recommended to start making updates for sharding at around 2,000 guilds.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://discordjs.guide/sharding/#when-to-shard",target:"_blank",rel:"noopener noreferrer"}},[t._v("Discord.js Sharding Guide"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("When you hit that milestone and need to begin the sharding process this guide will serve as a starting document to help you get set up.")]),t._v(" "),a("h2",{attrs:{id:"before-you-start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#before-you-start"}},[t._v("#")]),t._v(" Before you start")]),t._v(" "),a("ul",[a("li",[t._v("✅ Get your bot into 2,000 guilds")]),t._v(" "),a("li",[t._v("✅ Ensure your bot compiles down to javascript with "),a("code",[t._v("tsc")])])]),t._v(" "),a("h3",{attrs:{id:"what-if-my-bot-is-in-less-than-2-000-servers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-if-my-bot-is-in-less-than-2-000-servers"}},[t._v("#")]),t._v(" What if my bot is in less than 2,000 servers?")]),t._v(" "),a("p",[t._v("discord."),a("strong",[t._v("js")]),t._v(" has stated")]),t._v(" "),a("p",[t._v('"'),a("em",[t._v("Sharding is only necessary at 2,500 guilds—at that point, Discord will not allow your bot to login without sharding. With that in mind, you should consider this when your bot is around 2,000 guilds, which should be enough time to get this working. Contrary to popular belief, sharding itself is very simple. It can be complex depending on your bot's needs, however. If your bot is in a total of 2,000 or more servers, then please continue with this guide. Otherwise, it may be a good idea to wait until then.")]),t._v('"')]),t._v(" "),a("p",[t._v("However if you are curious you may continue to read this doc! But don't worry about sharding until 2,000 guilds. Focus on building a quality bot as sharding adds more complexity.")]),t._v(" "),a("h3",{attrs:{id:"what-if-my-bot-does-not-compile-with-tsc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-if-my-bot-does-not-compile-with-tsc"}},[t._v("#")]),t._v(" What if my bot does not compile with tsc?")]),t._v(" "),a("p",[t._v("If your bot does not compile with "),a("code",[t._v("tsc")]),t._v(" but runs with "),a("code",[t._v("ts-node")]),t._v(" you will "),a("strong",[t._v("not")]),t._v(" be able to shard with the discord."),a("strong",[t._v("js")]),t._v(" sharding managers.")]),t._v(" "),a("p",[t._v("I found success with using this "),a("code",[t._v("tsconfig.json")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"compilerOptions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"module"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"commonjs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"target"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"es2020"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"noImplicitAny"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sourceMap"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"emitDecoratorMetadata"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"experimentalDecorators"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"importHelpers"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"forceConsistentCasingInFileNames"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lib"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"es2020"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"esnext.asynciterable"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"moduleResolution"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"outDir"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./src/build"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"exclude"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node_modules"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"indent"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"spaces"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("If you are receiving errors that complain about imports. Try using the following import where the compiler complains about the import.")]),t._v(" "),a("div",{staticClass:"language-diff extra-class"},[a("pre",{pre:!0,attrs:{class:"language-diff"}},[a("code",[a("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[a("span",{pre:!0,attrs:{class:"token prefix deleted"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token line"}},[t._v(" import * as fs from 'fs';\n")])]),a("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[t._v(' import fs = require("fs");\n')])])])])]),a("h2",{attrs:{id:"i-m-ready"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#i-m-ready"}},[t._v("#")]),t._v(" I'm Ready")]),t._v(" "),a("p",[t._v("Did you really read the previous section? If not go back and read it.")]),t._v(" "),a("p",[t._v("Okay so now that you are ready let's talk about the set up.")]),t._v(" "),a("div",{staticClass:"language-diff extra-class"},[a("pre",{pre:!0,attrs:{class:"language-diff"}},[a("code",[t._v("Bot\n├───environments/\n├───src/\n"),a("span",{pre:!0,attrs:{class:"token unchanged"}},[a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[t._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[t._v("    ├───app/\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[t._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[t._v("       ├───abstract/\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[t._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[t._v("       ├───commands/\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[t._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[t._v("       ├───const/\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[t._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[t._v("       ├───decorators/\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[t._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[t._v("       ├───guards/\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[t._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[t._v("       ├───handlers/\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[t._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[t._v("       ├───models/\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[t._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[t._v("       ├───services/\n")])]),a("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[t._v("       ├───entry.bot.ts\n")]),a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[t._v("       └───shard.bot.ts\n")])]),t._v("\n")])])]),a("p",[t._v("I recommend renaming your main entry file where you call "),a("code",[t._v("client.login(TOKEN);")]),t._v(" to "),a("code",[t._v("entry.bot.ts")]),t._v(" you can rename it to whatever you'd like just make sure you know that file is where the bot starts. Next you'll need to make a new "),a("code",[t._v("shard.bot.ts")]),t._v(" file. Again you can name it whatever as long as you know this file is where we will handle sharding.")]),t._v(" "),a("p",[t._v("You don't need to change anything in the "),a("code",[t._v("entry.bot.ts")]),t._v(" file. The magic will be in the "),a("code",[t._v("shard.bot.ts")]),t._v(" file.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Read the "),a("a",{attrs:{href:"https://discordjs.guide/sharding/",target:"_blank",rel:"noopener noreferrer"}},[t._v("discord.js sharding docs"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("p",[t._v("You will make a new class in the "),a("code",[t._v("shard.bot.ts")]),t._v(" file. I have named my class ShardBot")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ShardBot")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Inside this class I have defined a "),a("code",[t._v("static start")]),t._v(" method that gets called outside of the ShardBot class.")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ShardBot")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nShardBot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Now that we have the main bits of the Sharding class we need to use the discord."),a("strong",[t._v("js")]),t._v(" "),a("code",[t._v("ShardingManager")]),t._v(" to spawn a shard.")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ShardingManager "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"discord.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" environment "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../../environments/environment"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ShardBot")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" manager "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ShardingManager")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./src/build/src/app/entry.bot.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      token"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" environment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DISCORD_TOKEN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    manager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"shardCreate"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("shard"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("Launched shard ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("shard"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      \n    manager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("spawn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nShardBot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("The main thing to note here is that the path in the Instantiation of the "),a("code",[t._v("ShardingManager")]),t._v(" has the path to the "),a("code",[t._v("entry.bot.js")]),t._v(" file and not the "),a("code",[t._v(".ts")]),t._v(" file. The sharding manager requires the bot file to be a "),a("code",[t._v(".js")]),t._v(" file. This is why you need to ensure you can compile your bot with "),a("code",[t._v("tsc")]),t._v(".")]),t._v(" "),a("p",[t._v("The path in there may also be different for your bot so make sure you have the correct path!")]),t._v(" "),a("h2",{attrs:{id:"running"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running"}},[t._v("#")]),t._v(" Running")]),t._v(" "),a("p",[t._v("Now that your bot compiles and has the shard file we can run the bot with the sharding class.")]),t._v(" "),a("p",[a("code",[t._v("node build/app/shard.bot.js")])]),t._v(" "),a("p",[t._v("will start the shard here.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("Make sure you provide the correct path to the shard file when running with node.")])]),t._v(" "),a("p",[t._v("Once it starts up you should see")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Launched shard 0\n")])])]),a("p",[t._v("in the console.")]),t._v(" "),a("h2",{attrs:{id:"that-s-it"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#that-s-it"}},[t._v("#")]),t._v(" That's it")]),t._v(" "),a("p",[t._v("Congrats! Your bot is now using the sharding managers. You can still run the entry file instead of the shard file if you don't want to use sharding until it is needed.")])])}),[],!1,null,null,null);s.default=e.exports}}]);