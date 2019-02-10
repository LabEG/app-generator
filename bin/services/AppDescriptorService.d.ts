import { AppDescription } from "../models/classes/AppDescription";
import { ISwagger } from "../models/interfaces/ISwagger";
export declare class AppDescriptorService {
    fromJson(data: ISwagger): AppDescription;
}
