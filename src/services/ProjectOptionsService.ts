
import * as commandLineArgs from "command-line-args";
import { ProjectOptions } from "../models/classes/ProjectOptions";

export class ProjectOptionsService {
    public fromDefinitionOpts(options: commandLineArgs.CommandLineOptions): ProjectOptions[] {
        if (options.project && options.source) {
            throw new Error(`Can't set "--project" and "--source" option, must by one.`);
        } else if (options.project) {
            return this.projectOptionsFromProject();
        } else if (options.source) {
            return [this.projectOptionsFromOptionsDefinitions(options)];
        } else {
            throw new Error(`Must by set "--project" or "--source" option.`);
        }
    }

    protected projectOptionsFromProject(): ProjectOptions[] {
        return [];
    }

    protected projectOptionsFromOptionsDefinitions(options: commandLineArgs.CommandLineOptions): ProjectOptions {
        return new ProjectOptions().fromJSON(options);
    }

}
