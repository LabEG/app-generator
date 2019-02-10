"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppModelProperty = /** @class */ (function () {
    function AppModelProperty() {
    }
    return AppModelProperty;
}());
exports.AppModelProperty = AppModelProperty;
var AppModel = /** @class */ (function () {
    function AppModel() {
        this.properties = new Map();
    }
    return AppModel;
}());
exports.AppModel = AppModel;
var AppControllerMethod = /** @class */ (function () {
    function AppControllerMethod() {
    }
    return AppControllerMethod;
}());
exports.AppControllerMethod = AppControllerMethod;
var AppController = /** @class */ (function () {
    function AppController() {
        this.methods = new Map();
    }
    return AppController;
}());
exports.AppController = AppController;
var AppDescription = /** @class */ (function () {
    function AppDescription() {
        this.apiRoot = "";
        this.controllers = new Map();
        this.models = new Map();
    }
    return AppDescription;
}());
exports.AppDescription = AppDescription;
//# sourceMappingURL=AppDescription.js.map