
export class AppModelProperty {

}

export class AppModel {
    public properties: Map<string, AppModelProperty> = new Map();
}

export class AppControllerMethod {
    public method: string = "";
    public path: string = "";
    public name: string = "";
}

export class AppController {
    public methods: Map<string, AppControllerMethod> = new Map();
}

export class AppDescription {
    public apiRoot: string  = "";
    public controllers: Map<string, AppController> = new Map();
    public models: Map<string, AppModel> = new Map();
}
