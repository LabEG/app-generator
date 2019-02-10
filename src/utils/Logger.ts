import * as winston from "winston";

export const logger = winston.createLogger({
    level: "verbose",
    format: winston.format.combine(
        winston.format.splat(),
        winston.format.simple()
      ),
    transports: [
        new winston.transports.Console()
    ]
});
