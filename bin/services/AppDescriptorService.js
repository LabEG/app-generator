"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppDescriptor_1 = require("../models/classes/AppDescriptor");
var AppDescriptorService = /** @class */ (function () {
    function AppDescriptorService() {
    }
    AppDescriptorService.prototype.fromJson = function (data) {
        return new AppDescriptor_1.AppDescriptor();
    };
    return AppDescriptorService;
}());
exports.AppDescriptorService = AppDescriptorService;
//# sourceMappingURL=AppDescriptorService.js.map