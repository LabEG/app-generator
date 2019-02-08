
import * as commandLineArgs from "command-line-args";
import { ProjectOptions } from "../models/classes/ProjectOptions";

export class DefinitionsService {
    public toProjectOptions(options: commandLineArgs.CommandLineOptions): ProjectOptions[] {
        console.log("1111111111111");
        if (options.project && options.source) {
            console.log("2222222222222");
            throw new Error(`Can't set "--project" and "--source" option, must by one.`);
        } else if (options.project) {
            console.log("3333333333333");
            return this.projectOptionsFromProject();
        } else if (options.source) {
            console.log("4444444444444");
            return [this.projectOptionsFromOptionsDefinitions(options)];
        } else {
            console.log("5555555555555");
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
