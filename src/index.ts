// tslint:disable:file-name-casing

// tslint:disable-next-line:no-import-side-effect
import "reflect-metadata";

import * as commandLineArgs from "command-line-args";
import * as commandLineUsage from "command-line-usage";
import * as https from "https";
import * as http from "http";

import { optionDefinitions } from "./models/classes/OptionsDefinitions";
import { usageDefinitions } from "./models/classes/UsageDefinitions";
import { ProjectOptionsService } from "./services/ProjectOptionsService";
import { ProjectOptions } from "./models/classes/ProjectOptions";
import { AppDescriptionService } from "./services/AppDescriptionService";
import { logger } from "./utils/Logger";

const defOptions = commandLineArgs(optionDefinitions);
const usage = commandLineUsage(usageDefinitions);

function printUsage(e?: Error): void {
    if (e) {
        logger.error("\nError: %s", e.message);
    }
    logger.log("verbose", usage);
    process.exit(-1);
}

if (defOptions.help) {
    printUsage();
}

const projectOptsService = new ProjectOptionsService();
const appDescriptorService = new AppDescriptionService();

try {
    const prOptions: ProjectOptions[] = projectOptsService.fromDefinitionOpts(defOptions);
    prOptions.forEach((prOption) => {
        logger.log("verbose", "Connect to: %s", prOption.source);
        https
            .get(prOption.source, {}, (response: http.IncomingMessage) => {
                logger.log("verbose", "Begin download: %s", prOption.source);
                response.setEncoding("utf8");
                let swaggerJson: string = "";
                response.on("data", function(chunk) {
                    swaggerJson = chunk;
                });
                response.on("end", () => {
                    logger.log("verbose", "Complete download: %s", prOption.source);
                    const appDescriptor = appDescriptorService.fromJson(JSON.parse(swaggerJson));
                    console.log(appDescriptor.controllers);
                });
            })
            .on("error", (err) => {
                logger.error("\nError: %s", err.message);
            });
    });
} catch (e) {
    printUsage(e);
}
