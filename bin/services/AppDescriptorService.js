"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppDescription_1 = require("../models/classes/AppDescription");
var AppDescriptorService = /** @class */ (function () {
    function AppDescriptorService() {
    }
    AppDescriptorService.prototype.fromJson = function (data) {
        var appDescription = new AppDescription_1.AppDescription();
        return appDescription;
    };
    return AppDescriptorService;
}());
exports.AppDescriptorService = AppDescriptorService;
//# sourceMappingURL=AppDescriptorService.js.map