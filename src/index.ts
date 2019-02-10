// tslint:disable:file-name-casing no-console

// tslint:disable-next-line:no-import-side-effect
import "reflect-metadata";

import * as commandLineArgs from "command-line-args";
import * as commandLineUsage from "command-line-usage";
import * as https from "https";
import * as http from "http";

import { optionDefinitions } from "./models/classes/OptionsDefinitions";
import { usageDefinitions } from "./models/classes/UsageDefinitions";
import { ProjectOptionsService } from "./services/DefinitionsService";
import { ProjectOptions } from "./models/classes/ProjectOptions";
import { AppDescriptorService } from "./services/AppDescriptorService";

const defOptions = commandLineArgs(optionDefinitions);
const usage = commandLineUsage(usageDefinitions);

function printUsage(e?: Error): void {
    if (e) {
        console.log("\n%cError: ", e.message, "color:red");
    }
    console.log(usage);
    process.exit(-1);
}

if (defOptions.help) {
    printUsage();
}

const projectOptsService = new ProjectOptionsService();
const appDescriptorService = new AppDescriptorService();

try {
    const prOptions: ProjectOptions[] = projectOptsService.fromDefinitionOpts(defOptions);
    prOptions.forEach((prOption) => {
        https
            .get(prOption.source, {}, (response: http.IncomingMessage) => {
                response.setEncoding("utf8");
                let swaggerJson: string = "";
                response.on("data", function(chunk) {
                    swaggerJson = chunk;
                });
                response.on("end", () => {
                    const appDescriptor = appDescriptorService.fromJson(JSON.parse(swaggerJson));
                    console.log(appDescriptor);
                });
            })
            .on("error", (err) => {
                console.log(`%cError: ${err.message}`, "color:red");
            });
    });
} catch (e) {
    printUsage(e);
}
