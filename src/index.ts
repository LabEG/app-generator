
import * as commandLineArgs from "command-line-args";
import * as commandLineUsage from "command-line-usage";

import { optionDefinitions } from "./models/OptionsDefinitions";
import { usageDefinitions } from "./models/UsageDefinitions";

const options = commandLineArgs(optionDefinitions);
const usage = commandLineUsage(usageDefinitions);

console.log(options);
console.log(usage);
