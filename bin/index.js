"use strict";
// tslint:disable:file-name-casing
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-import-side-effect
require("reflect-metadata");
var commandLineArgs = require("command-line-args");
var commandLineUsage = require("command-line-usage");
var https = require("https");
var OptionsDefinitions_1 = require("./models/classes/OptionsDefinitions");
var UsageDefinitions_1 = require("./models/classes/UsageDefinitions");
var ProjectOptionsService_1 = require("./services/ProjectOptionsService");
var AppDescriptionService_1 = require("./services/AppDescriptionService");
var Logger_1 = require("./utils/Logger");
var defOptions = commandLineArgs(OptionsDefinitions_1.optionDefinitions);
var usage = commandLineUsage(UsageDefinitions_1.usageDefinitions);
function printUsage(e) {
    if (e) {
        Logger_1.logger.error("\nError: %s", e.message);
    }
    Logger_1.logger.log("verbose", usage);
    process.exit(-1);
}
if (defOptions.help) {
    printUsage();
}
var projectOptsService = new ProjectOptionsService_1.ProjectOptionsService();
var appDescriptorService = new AppDescriptionService_1.AppDescriptionService();
try {
    var prOptions = projectOptsService.fromDefinitionOpts(defOptions);
    prOptions.forEach(function (prOption) {
        Logger_1.logger.log("verbose", "Connect to: %s", prOption.source);
        https
            .get(prOption.source, {}, function (response) {
            Logger_1.logger.log("verbose", "Begin download: %s", prOption.source);
            response.setEncoding("utf8");
            var swaggerJson = "";
            response.on("data", function (chunk) {
                swaggerJson = chunk;
            });
            response.on("end", function () {
                Logger_1.logger.log("verbose", "Complete download: %s", prOption.source);
                var appDescriptor = appDescriptorService.fromJson(JSON.parse(swaggerJson));
                console.log(appDescriptor);
            });
        })
            .on("error", function (err) {
            Logger_1.logger.error("\nError: %s", err.message);
        });
    });
}
catch (e) {
    printUsage(e);
}
//# sourceMappingURL=index.js.map