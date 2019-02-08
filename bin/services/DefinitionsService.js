"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProjectOptions_1 = require("../models/classes/ProjectOptions");
var DefinitionsService = /** @class */ (function () {
    function DefinitionsService() {
    }
    DefinitionsService.prototype.toProjectOptions = function (options) {
        console.log("1111111111111");
        if (options.project && options.source) {
            console.log("2222222222222");
            throw new Error("Can't set \"--project\" and \"--source\" option, must by one.");
        }
        else if (options.project) {
            console.log("3333333333333");
            return this.projectOptionsFromProject();
        }
        else if (options.source) {
            console.log("4444444444444");
            return [this.projectOptionsFromOptionsDefinitions(options)];
        }
        else {
            console.log("5555555555555");
            throw new Error("Must by set \"--project\" or \"--source\" option.");
        }
    };
    DefinitionsService.prototype.projectOptionsFromProject = function () {
        return [];
    };
    DefinitionsService.prototype.projectOptionsFromOptionsDefinitions = function (options) {
        return new ProjectOptions_1.ProjectOptions().fromJSON(options);
    };
    return DefinitionsService;
}());
exports.DefinitionsService = DefinitionsService;
//# sourceMappingURL=DefinitionsService.js.map