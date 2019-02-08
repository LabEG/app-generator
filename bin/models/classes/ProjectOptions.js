"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ts_serializable_1 = require("ts-serializable");
var ProjectOptions = /** @class */ (function (_super) {
    tslib_1.__extends(ProjectOptions, _super);
    function ProjectOptions() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "";
        _this.source = "";
        _this.rootDir = ".";
        _this.modelsDir = ".";
        _this.servicesDir = ".";
        _this.repositoriesDir = ".";
        return _this;
    }
    tslib_1.__decorate([
        ts_serializable_1.jsonProperty(String),
        tslib_1.__metadata("design:type", String)
    ], ProjectOptions.prototype, "name", void 0);
    tslib_1.__decorate([
        ts_serializable_1.jsonProperty(String),
        tslib_1.__metadata("design:type", String)
    ], ProjectOptions.prototype, "source", void 0);
    tslib_1.__decorate([
        ts_serializable_1.jsonProperty(String),
        tslib_1.__metadata("design:type", String)
    ], ProjectOptions.prototype, "rootDir", void 0);
    tslib_1.__decorate([
        ts_serializable_1.jsonProperty(String),
        tslib_1.__metadata("design:type", String)
    ], ProjectOptions.prototype, "modelsDir", void 0);
    tslib_1.__decorate([
        ts_serializable_1.jsonProperty(String),
        tslib_1.__metadata("design:type", String)
    ], ProjectOptions.prototype, "servicesDir", void 0);
    tslib_1.__decorate([
        ts_serializable_1.jsonProperty(String),
        tslib_1.__metadata("design:type", String)
    ], ProjectOptions.prototype, "repositoriesDir", void 0);
    return ProjectOptions;
}(ts_serializable_1.Serializable));
exports.ProjectOptions = ProjectOptions;
//# sourceMappingURL=ProjectOptions.js.map