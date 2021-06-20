import winston from 'winston';

const fileOptions = winston.format.combine(
  winston.format.timestamp({ format: 'DD-MM-YYYY HH:mm:ss:ms' }),
  winston.format.uncolorize(),
  winston.format.json()
);

const consoleOptions = winston.format.combine(
  winston.format.timestamp({ format: 'DD-MM-YYYY HH:mm:ss:ms' }),
  winston.format.colorize(),
  winston.format.prettyPrint()
);

const logger = winston.createLogger({
  level: 'silly',
  transports: [
    new winston.transports.File({
      filename: './logs/error.log',
      level: 'error',
      format: fileOptions,
    }),
    new winston.transports.File({
      filename: './logs/all.log',
      format: fileOptions,
    }),
    new winston.transports.Console({
      format: consoleOptions,
      level: 'error',
    }),
  ],
});

export { logger };
