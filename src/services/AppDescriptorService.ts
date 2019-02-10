import { AppDescriptor } from "../models/classes/AppDescriptor";
import { ISwagger } from "../models/interfaces/ISwagger";

export class AppDescriptorService {
    public fromJson(data: ISwagger): AppDescriptor {
        return new AppDescriptor();
    }
}
