"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProjectOptions_1 = require("../models/classes/ProjectOptions");
var DefinitionsService = /** @class */ (function () {
    function DefinitionsService() {
    }
    DefinitionsService.prototype.toProjectOptions = function (options) {
        if (options.project && options.source) {
            throw new Error("Can't set \"--project\" and \"--source\" option, must by one.");
        }
        else if (options.project) {
            return this.projectOptionsFromProject();
        }
        else if (options.source) {
            return [this.projectOptionsFromOptionsDefinitions(options)];
        }
        else {
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