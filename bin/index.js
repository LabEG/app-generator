"use strict";
// tslint:disable:file-name-casing no-console
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-import-side-effect
require("reflect-metadata");
var commandLineArgs = require("command-line-args");
var commandLineUsage = require("command-line-usage");
var https = require("https");
var OptionsDefinitions_1 = require("./models/classes/OptionsDefinitions");
var UsageDefinitions_1 = require("./models/classes/UsageDefinitions");
var DefinitionsService_1 = require("./services/DefinitionsService");
var options = commandLineArgs(OptionsDefinitions_1.optionDefinitions);
var usage = commandLineUsage(UsageDefinitions_1.usageDefinitions);
function printUsage(e) {
    if (e) {
        console.log("\nError: ", e.message);
    }
    console.log(usage);
    process.exit(-1);
}
if (options.help) {
    printUsage();
}
try {
    var prOptions = new DefinitionsService_1.DefinitionsService().toProjectOptions(options);
    prOptions.forEach(function (prOption) {
        https
            .get(prOption.source, {}, function (response) {
            response.setEncoding("utf8");
            var swaggerJson = "";
            response.on("data", function (chunk) {
                swaggerJson = chunk;
            });
            response.on("end", function () {
                console.log(swaggerJson);
            });
        })
            .on("error", function (err) {
            console.log("Error: " + err.message);
        });
    });
}
catch (e) {
    printUsage(e);
}
//# sourceMappingURL=index.js.map