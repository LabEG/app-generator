"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppDescription_1 = require("../models/classes/AppDescription");
var Logger_1 = require("../utils/Logger");
var AppDescriptionService = /** @class */ (function () {
    function AppDescriptionService() {
    }
    AppDescriptionService.prototype.fromJson = function (data) {
        var appDescription = new AppDescription_1.AppDescription();
        appDescription.apiRoot = data.basePath;
        var patchs = Reflect.ownKeys(data.paths);
        patchs.forEach(function (path) {
            var patchParts = path.split("/");
            var controllerName = patchParts[0] || patchParts[1];
            controllerName = controllerName.substring(0, 1).toUpperCase() +
                controllerName.substring(1);
            Logger_1.logger.log("verbose", "Process path: %s", path);
            Logger_1.logger.log("verbose", "Contoller: %s", controllerName);
        });
        return appDescription;
    };
    return AppDescriptionService;
}());
exports.AppDescriptionService = AppDescriptionService;
//# sourceMappingURL=AppDescriptionService.js.map