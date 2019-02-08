
import { jsonProperty, Serializable } from "ts-serializable";

export class ProjectOptions extends Serializable {

    @jsonProperty(String)
    public name: string = "";

    @jsonProperty(String)
    public source: string = "";

    @jsonProperty(String)
    public rootDir: string = ".";
    @jsonProperty(String)
    public modelsDir: string = ".";
    @jsonProperty(String)
    public servicesDir: string = ".";
    @jsonProperty(String)
    public repositoriesDir: string = ".";

}
