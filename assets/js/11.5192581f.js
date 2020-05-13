(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{338:function(e,t,a){"use strict";a.r(t);var s=a(18),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"customizing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#customizing"}},[e._v("#")]),e._v(" Customizing")]),e._v(" "),a("h2",{attrs:{id:"environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#environment"}},[e._v("#")]),e._v(" Environment")]),e._v(" "),a("p",[e._v("By adding a "),a("code",[e._v(".env")]),e._v(" file and a redis configuration file ("),a("code",[e._v("redis.conf")]),e._v(") in the\n"),a("code",[e._v("db/")]),e._v(" folder, you can customize your setup.")]),e._v(" "),a("p",[e._v("Here's an overview of the values you can use in the "),a("code",[e._v(".env")]),e._v(" file:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Key")]),e._v(" "),a("th",[e._v("Default")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{href:"#web-server"}},[a("code",[e._v("Port")])])]),e._v(" "),a("td",[a("code",[e._v("8080")])]),e._v(" "),a("td",[e._v("Web Server Port")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#web-server"}},[a("code",[e._v("HTTP_SERVER_ERROR")])])]),e._v(" "),a("td",[a("code",[e._v("500")])]),e._v(" "),a("td",[e._v("HTTP error for generic server errors")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#jwt"}},[a("code",[e._v("JWT_KEY")])])]),e._v(" "),a("td"),e._v(" "),a("td",[e._v("JSON Web Token encryption key")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#database"}},[a("code",[e._v("DB_URL")])])]),e._v(" "),a("td",[a("code",[e._v("127.0.0.1:6379")])]),e._v(" "),a("td",[e._v("Database URL")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#database"}},[a("code",[e._v("DB_PASS")])])]),e._v(" "),a("td"),e._v(" "),a("td",[e._v("Database password")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#database"}},[a("code",[e._v("CONNECTION_RETRY")])])]),e._v(" "),a("td",[a("code",[e._v("20")])]),e._v(" "),a("td",[e._v("Number of database reconnection trials")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#cleanup"}},[a("code",[e._v("EXPIRE_ROOMS")])])]),e._v(" "),a("td",[a("code",[e._v("86400")]),e._v(" = 1 day")]),e._v(" "),a("td",[e._v("Number of seconds to keep open rooms")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#cleanup"}},[a("code",[e._v("AGGRESSIVE_CLEANUP")])])]),e._v(" "),a("td",[a("code",[e._v("false")])]),e._v(" "),a("td",[e._v("Whether to perform aggressive cleanup")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#cleanup"}},[a("code",[e._v("CLEANUP_INTERVAL")])])]),e._v(" "),a("td",[a("code",[e._v("false")])]),e._v(" "),a("td",[e._v("Length in seconds of cleanup interval")])])])]),e._v(" "),a("p",[e._v("Check out the "),a("a",{attrs:{href:"https://github.com/umcconnell/destroyer2/blob/master/.env.example",target:"_blank",rel:"noopener noreferrer"}},[e._v("example .env"),a("OutboundLink")],1),e._v(" file for a concrete example configuration.")]),e._v(" "),a("h3",{attrs:{id:"web-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web-server"}},[e._v("#")]),e._v(" Web Server")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("PORT")]),e._v(" - The port to serve the project on. Default is "),a("code",[e._v("8080")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("HTTP_SERVER_ERROR")]),e._v(" - The error code to print out when encountering a\ngeneric internal server error. Default is "),a("code",[e._v("500")]),e._v(".")])]),e._v(" "),a("h3",{attrs:{id:"jwt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jwt"}},[e._v("#")]),e._v(" JWT")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("JWT_KEY")]),e._v(" - "),a("abbr",{attrs:{title:"JSON Web Token"}},[e._v("JWT")]),e._v(" encryption key.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("This key should definitely be specified in production and kept secret!")])])])]),e._v(" "),a("p",[e._v("See the "),a("a",{attrs:{href:"./auth"}},[e._v("Auth")]),e._v(" docs for more information.")]),e._v(" "),a("h3",{attrs:{id:"database"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#database"}},[e._v("#")]),e._v(" Database")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("DB_URL")]),e._v(" - The Redis database url the server should connect to. You may also\nspecify "),a("code",[e._v("REDIS_URL")]),e._v(" as an alias to this key. If left empty, the server tries\nconnecting to the default url "),a("code",[e._v("127.0.0.1:6379")]),e._v(".")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("DB_PASS")]),e._v(" - The Redis database password. You may also specify "),a("code",[e._v("REDIS_PASS")]),e._v("\nas an alias to this key.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("When using a password, you must add it to the "),a("code",[e._v(".env")]),e._v(" file "),a("strong",[e._v("and")]),e._v(" to the\nRedis configuration file. To set a password on the database, put this line\ninto your "),a("code",[e._v("redis.conf")]),e._v(" config file:"),a("br"),e._v(" "),a("code",[e._v('requirepass "<Your Super Secret Password>"')]),e._v(".")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("CONNECTION_RETRY")]),e._v(" - Number of times to retry establishing a connection to\nthe database if the connection breaks. Default is "),a("code",[e._v("20")]),e._v(". Note that this\nflag "),a("strong",[e._v("only takes effect in production")]),e._v(" (when "),a("code",[e._v("NODE_ENV")]),e._v(" is set to\n"),a("code",[e._v('"production"')]),e._v(").")])])]),e._v(" "),a("h3",{attrs:{id:"cleanup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cleanup"}},[e._v("#")]),e._v(" Cleanup")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("EXPIRE_ROOMS")]),e._v(" - Number of seconds to keep open rooms before deleting them.\nDefault is "),a("code",[e._v("86400")]),e._v(" seconds (= 1 day).")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("AGGRESSIVE_CLEANUP")]),e._v(" - Whether to perform aggressive cleanup, i.e.\nactivating Redis keyspace-event listeners. Default is "),a("code",[e._v("false")]),e._v(".")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Keyspace-event listeners are only available since Redis 2.8.0 and might not\nwork in every environment such as Heroku.")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("CLEANUP_INTERVAL")]),e._v(" - Interval length in seconds, after which passive cleanup\nis activated by calling the openrooms endpoint. Default is "),a("code",[e._v("false")]),e._v(".")])])]),e._v(" "),a("p",[e._v("See the "),a("a",{attrs:{href:"./cleanup"}},[e._v("Cleanup")]),e._v(" docs for more information.")]),e._v(" "),a("h2",{attrs:{id:"logging"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logging"}},[e._v("#")]),e._v(" Logging")]),e._v(" "),a("p",[e._v("You can customize the log formats in "),a("code",[e._v("/helpers/logger.js")]),e._v(". The "),a("code",[e._v("config")]),e._v(" variable\nis worth mentioning here, as it contains the basic configuration for the file\nand console transports.")]),e._v(" "),a("p",[e._v("For example, you could output the file logs in prettyprinted JSON with\ntimestamps:")]),e._v(" "),a("div",{staticClass:"language-diff extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[e._v(" ")]),a("div",{staticClass:"highlighted"},[e._v(" ")]),a("div",{staticClass:"highlighted"},[e._v(" ")]),a("div",{staticClass:"highlighted"},[e._v(" ")]),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-diff"}},[a("code",[a("span",{pre:!0,attrs:{class:"token unchanged"}},[e._v(' file: {\n     level: environment === "production" ? "info" : "debug",\n     filename: "logs/log.log",\n     maxsize: 5000000, // 5MB\n     maxFiles: 5,\n     format: winston.format.combine(\n         winston.format.errors({ stack: true }),\n         winston.format.splat(),\n         winston.format.uncolorize(),\n')]),a("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[e._v("-        winston.format.simple()\n")]),a("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[e._v("+        winston.format.timestamp(),\n+        winston.format.prettyPrint(),\n+        winston.format.json()\n")]),a("span",{pre:!0,attrs:{class:"token unchanged"}},[e._v("     )\n }\n")])])])]),a("p",[e._v("Find out more about customizing winston logs on the\n"),a("a",{attrs:{href:"https://github.com/winstonjs/winston",target:"_blank",rel:"noopener noreferrer"}},[e._v("winston homepage"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=o.exports}}]);