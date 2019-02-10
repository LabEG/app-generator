"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProjectOptions_1 = require("../models/classes/ProjectOptions");
var ProjectOptionsService = /** @class */ (function () {
    function ProjectOptionsService() {
    }
    ProjectOptionsService.prototype.fromDefinitionOpts = function (options) {
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
    ProjectOptionsService.prototype.projectOptionsFromProject = function () {
        return [];
    };
    ProjectOptionsService.prototype.projectOptionsFromOptionsDefinitions = function (options) {
        return new ProjectOptions_1.ProjectOptions().fromJSON(options);
    };
    return ProjectOptionsService;
}());
exports.ProjectOptionsService = ProjectOptionsService;
//# sourceMappingURL=DefinitionsService.js.map