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
var AppDescriptorService_1 = require("./services/AppDescriptorService");
var defOptions = commandLineArgs(OptionsDefinitions_1.optionDefinitions);
var usage = commandLineUsage(UsageDefinitions_1.usageDefinitions);
function printUsage(e) {
    if (e) {
        console.log("\n%cError: ", e.message, "color:red");
    }
    console.log(usage);
    process.exit(-1);
}
if (defOptions.help) {
    printUsage();
}
var projectOptsService = new DefinitionsService_1.ProjectOptionsService();
var appDescriptorService = new AppDescriptorService_1.AppDescriptorService();
try {
    var prOptions = projectOptsService.fromDefinitionOpts(defOptions);
    prOptions.forEach(function (prOption) {
        https
            .get(prOption.source, {}, function (response) {
            response.setEncoding("utf8");
            var swaggerJson = "";
            response.on("data", function (chunk) {
                swaggerJson = chunk;
            });
            response.on("end", function () {
                var appDescriptor = appDescriptorService.fromJson(JSON.parse(swaggerJson));
                console.log(appDescriptor);
            });
        })
            .on("error", function (err) {
            console.log("%cError: " + err.message, "color:red");
        });
    });
}
catch (e) {
    printUsage(e);
}
//# sourceMappingURL=index.js.map