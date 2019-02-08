"use strict";
// tslint:disable:file-name-casing
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var commandLineArgs = require("command-line-args");
var commandLineUsage = require("command-line-usage");
var https = require("https");
var OptionsDefinitions_1 = require("./models/classes/OptionsDefinitions");
var UsageDefinitions_1 = require("./models/classes/UsageDefinitions");
var DefinitionsService_1 = require("./services/DefinitionsService");
var options = commandLineArgs(OptionsDefinitions_1.optionDefinitions);
var usage = commandLineUsage(UsageDefinitions_1.usageDefinitions);
// tslint:disable:no-console
console.log("222222222222", options);
function printUsage(e) {
    console.log("222222222222", options);
    if (e) {
        console.log("Error: ", e.message);
    }
    console.log(usage);
    process.exit(-1);
}
if (options.help) {
    printUsage();
}
try {
    var prOptions = new DefinitionsService_1.DefinitionsService().toProjectOptions(options);
    https.get(options.source, {}, function (response) {
        response.setEncoding("utf8");
        response.on("data", function (chunk) {
            console.log(chunk);
        });
    });
    console.log("1111111111111111111", prOptions);
}
catch (e) {
    printUsage(e);
}
//# sourceMappingURL=index.js.map