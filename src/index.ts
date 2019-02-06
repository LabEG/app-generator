// tslint:disable:file-name-casing

import * as commandLineArgs from "command-line-args";
import * as commandLineUsage from "command-line-usage";
import * as https from "https";
import * as http from "http";

import { optionDefinitions } from "./models/classes/OptionsDefinitions";
import { usageDefinitions } from "./models/classes/UsageDefinitions";

const options = commandLineArgs(optionDefinitions);
const usage = commandLineUsage(usageDefinitions);

// tslint:disable:no-console

if (options.help) {
    console.log(usage);
    process.exit(-1);
}

if (options.project) {
    console.log("// todo");
} else if (options.source) {
    console.log("Download file: ", options.source);
    https.get(options.source, {}, (response: http.IncomingMessage) => {
        response.setEncoding("utf8");
        response.on("data", function(chunk) {
            console.log(chunk);
          });
    });
} else {
    console.log(usage);
    process.exit(-1);
}
