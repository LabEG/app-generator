import * as commandLineArgs from "command-line-args";
import { ProjectOptions } from "../models/classes/ProjectOptions";
export declare class ProjectOptionsService {
    fromDefinitionOpts(options: commandLineArgs.CommandLineOptions): ProjectOptions[];
    protected projectOptionsFromProject(): ProjectOptions[];
    protected projectOptionsFromOptionsDefinitions(options: commandLineArgs.CommandLineOptions): ProjectOptions;
}
