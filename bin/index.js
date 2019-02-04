"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commandLineArgs = require("command-line-args");
var commandLineUsage = require("command-line-usage");
var OptionsDefinitions_1 = require("./models/OptionsDefinitions");
var UsageDefinitions_1 = require("./models/UsageDefinitions");
var options = commandLineArgs(OptionsDefinitions_1.optionDefinitions);
var usage = commandLineUsage(UsageDefinitions_1.usageDefinitions);
console.log(options);
console.log(usage);
//# sourceMappingURL=index.js.map