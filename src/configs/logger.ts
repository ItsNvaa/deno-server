import winston from "npm:winston";

const logger = winston.createLogger({
  level: "info",
  format: winston.format.printf((info): string => {
    return `${new Date()} - ${info.level.toUpperCase()} : ${info.message}`;
  }),
  transports: [new winston.transports.Console({})],
});

export default logger;
