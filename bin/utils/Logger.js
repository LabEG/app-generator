"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var winston = require("winston");
exports.logger = winston.createLogger({
    level: "verbose",
    format: winston.format.combine(winston.format.splat(), winston.format.simple()),
    transports: [
        new winston.transports.Console()
    ]
});
//# sourceMappingURL=Logger.js.map