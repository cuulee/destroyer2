(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{380:function(e,s,t){"use strict";t.r(s);var n=t(25),a=Object(n.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"logging"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#logging"}},[e._v("#")]),e._v(" Logging")]),e._v(" "),t("p",[e._v("By default, all logs are printed to the console and saved to file in the "),t("code",[e._v("logs/")]),e._v("\nfolder. The log files will not exceed 5 MB.")]),e._v(" "),t("p",[e._v("In production mode, only logs with the level "),t("code",[e._v("info")]),e._v(" or higher will be output\nto the console and saved to file. All logs are saved to the "),t("code",[e._v("logs/combined.log")]),e._v("\nfile. Additionally, all error logs are saved to "),t("code",[e._v("logs/error.log")]),e._v(" for easy\ninspection of program errors.")]),e._v(" "),t("h2",{attrs:{id:"customizing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#customizing"}},[e._v("#")]),e._v(" Customizing")]),e._v(" "),t("p",[e._v("You can customize the log formats in "),t("code",[e._v("/helpers/logger.js")]),e._v(". The "),t("code",[e._v("config")]),e._v(" variable\nis worth mentioning here, as it contains the basic configuration for the file\nand console transports.")]),e._v(" "),t("p",[e._v("For example, you could output the file logs in prettyprinted JSON with\ntimestamps:")]),e._v(" "),t("div",{staticClass:"language-diff extra-class"},[t("div",{staticClass:"highlight-lines"},[t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("div",{staticClass:"highlighted"},[e._v(" ")]),t("div",{staticClass:"highlighted"},[e._v(" ")]),t("div",{staticClass:"highlighted"},[e._v(" ")]),t("div",{staticClass:"highlighted"},[e._v(" ")]),t("br"),t("br"),t("br")]),t("pre",{pre:!0,attrs:{class:"language-diff"}},[t("code",[t("span",{pre:!0,attrs:{class:"token unchanged"}},[t("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),t("span",{pre:!0,attrs:{class:"token line"}},[e._v("file: {\n")]),t("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),t("span",{pre:!0,attrs:{class:"token line"}},[e._v('    level: environment === "production" ? "info" : "debug",\n')]),t("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),t("span",{pre:!0,attrs:{class:"token line"}},[e._v('    filename: "logs/log.log",\n')]),t("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),t("span",{pre:!0,attrs:{class:"token line"}},[e._v("    maxsize: 5000000, // 5MB\n")]),t("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),t("span",{pre:!0,attrs:{class:"token line"}},[e._v("    maxFiles: 5,\n")]),t("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),t("span",{pre:!0,attrs:{class:"token line"}},[e._v("    format: winston.format.combine(\n")]),t("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),t("span",{pre:!0,attrs:{class:"token line"}},[e._v("        winston.format.errors({ stack: true }),\n")]),t("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),t("span",{pre:!0,attrs:{class:"token line"}},[e._v("        winston.format.splat(),\n")]),t("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),t("span",{pre:!0,attrs:{class:"token line"}},[e._v("        winston.format.uncolorize(),\n")])]),t("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[t("span",{pre:!0,attrs:{class:"token prefix deleted"}},[e._v("-")]),t("span",{pre:!0,attrs:{class:"token line"}},[e._v("        winston.format.simple()\n")])]),t("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[t("span",{pre:!0,attrs:{class:"token prefix inserted"}},[e._v("+")]),t("span",{pre:!0,attrs:{class:"token line"}},[e._v("        winston.format.timestamp(),\n")]),t("span",{pre:!0,attrs:{class:"token prefix inserted"}},[e._v("+")]),t("span",{pre:!0,attrs:{class:"token line"}},[e._v("        winston.format.prettyPrint(),\n")]),t("span",{pre:!0,attrs:{class:"token prefix inserted"}},[e._v("+")]),t("span",{pre:!0,attrs:{class:"token line"}},[e._v("        winston.format.json()\n")])]),t("span",{pre:!0,attrs:{class:"token unchanged"}},[t("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),t("span",{pre:!0,attrs:{class:"token line"}},[e._v("    )\n")]),t("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),t("span",{pre:!0,attrs:{class:"token line"}},[e._v("}\n")])])])])]),t("p",[e._v("Find out more about customizing winston logs on the\n"),t("a",{attrs:{href:"https://github.com/winstonjs/winston",target:"_blank",rel:"noopener noreferrer"}},[e._v("winston homepage"),t("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=a.exports}}]);