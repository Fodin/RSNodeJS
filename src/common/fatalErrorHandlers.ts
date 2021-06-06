import logger from './logger.js';

const fatalErrorsHandle = (): void => {
  process
    .on('uncaughtException', (error) => {
      logger.error({ type: 'uncaughtException', message: error.message });
      setTimeout(() => {
        process.exit(1);
      }, 1000);
    })
    .on('unhandledRejection', (_reason, promise) => {
      promise.catch((error) => {
        logger.error(
          JSON.stringify({ type: 'unhandledRejection', errorMessage: error.message, stackTrace: error.stack })
        );
        setTimeout(() => {
          process.exit(1);
        }, 1000);
      });
    });
};

export default fatalErrorsHandle;
