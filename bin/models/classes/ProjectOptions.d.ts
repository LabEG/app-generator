import { Serializable } from "ts-serializable";
export declare class ProjectOptions extends Serializable {
    name: string;
    source: string;
    rootDir: string;
    modelsDir: string;
    servicesDir: string;
    repositoriesDir: string;
}
