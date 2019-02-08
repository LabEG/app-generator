// tslint:disable:file-name-casing

import "reflect-metadata";

import * as commandLineArgs from "command-line-args";
import * as commandLineUsage from "command-line-usage";
import * as https from "https";
import * as http from "http";

import { optionDefinitions } from "./models/classes/OptionsDefinitions";
import { usageDefinitions } from "./models/classes/UsageDefinitions";
import { DefinitionsService } from "./services/DefinitionsService";
import { ProjectOptions } from "./models/classes/ProjectOptions";

const options = commandLineArgs(optionDefinitions);
const usage = commandLineUsage(usageDefinitions);

// tslint:disable:no-console
console.log("222222222222", options);
function printUsage(e?: Error): void {
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
    const prOptions: ProjectOptions[] = new DefinitionsService().toProjectOptions(options);
    https.get(options.source, {}, (response: http.IncomingMessage) => {
        response.setEncoding("utf8");
        response.on("data", function(chunk) {
            console.log(chunk);
        });
    });
    console.log("1111111111111111111", prOptions);
} catch (e) {
    printUsage(e);
}
