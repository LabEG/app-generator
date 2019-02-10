import { AppDescriptor } from '../models/classes/AppDescriptor';
import { ISwaggerJson } from '../models/interfaces/ISwaggerJson';

export class AppDescriptorService {
    public fromJson(data: ISwaggerJson): AppDescriptor {
        return new AppDescriptor();
    }
}
