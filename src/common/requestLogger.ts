import { Request, Response, NextFunction} from 'express';
import { finished } from 'stream';
import { logger } from './logger';

const requestLogger = (req: Request, res: Response, next: NextFunction): void => {
  const { method, url, query, body, params, headers } = req;
  next();

  finished(res, () => {
    const { statusCode } = res;
    logger.info(JSON.stringify({method, url, query, body, statusCode, params, headers }));
  })
}

export { requestLogger };
