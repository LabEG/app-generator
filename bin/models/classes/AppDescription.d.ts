export declare class AppModelProperty {
}
export declare class AppModel {
    properties: Map<string, AppModelProperty>;
}
export declare class AppControllerMethod {
}
export declare class AppController {
    methods: Map<string, AppControllerMethod>;
}
export declare class AppDescription {
    apiRoot: string;
    controllers: Map<string, AppController>;
    models: Map<string, AppModel>;
}
