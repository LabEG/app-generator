import { AppDescription, AppController, AppControllerMethod } from '../models/classes/AppDescription';
import { ISwagger } from "../models/interfaces/ISwagger";
import { logger } from "../utils/Logger";

export class AppDescriptionService {
    public fromJson(data: ISwagger): AppDescription {

        const appDescription = new AppDescription();

        appDescription.apiRoot = data.basePath;

        const patchs = Reflect.ownKeys(data.paths);
        patchs.forEach((path: string) => {
            const patchParts: string[] = path.split("/");
            const patchObj: object = Reflect.get(data.paths, path);
            logger.log("verbose", "Process path: %s", path);

            // set controller name
            let controllerName = patchParts[0] || patchParts[1];
            controllerName = controllerName.substring(0, 1).toUpperCase() +
                controllerName.substring(1);
            logger.log("verbose", "Contoller: %s", controllerName);

            // set controller
            if (!appDescription.controllers.has(controllerName)) {
                appDescription.controllers.set(controllerName, new AppController());
            }
            const appController = appDescription.controllers.get(controllerName);

            // set method
            const methods = Reflect.ownKeys(patchObj);
            methods.forEach((method: string) => {
                // const methodObj = Reflect.get(patchObj, method);
                logger.log("verbose", "Method: %s", method);

                const appMethod = new AppControllerMethod();
                appMethod.method = method;
                appMethod.path = path;

                appController!.methods.set(method, appMethod);
            });

        });

        return appDescription;
    }
}
