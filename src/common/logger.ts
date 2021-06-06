import { Request, Response, NextFunction} from 'express';
import { finished } from 'stream';

const logger = (req: Request, res: Response, next: NextFunction): void => {
  const { method, url, query, body } = req;
  next();

  finished(res, () => {
    const { statusCode } = res;

    console.log(`${method} ${url} ${JSON.stringify(query)} ${JSON.stringify(body)} ${statusCode}`);
  })
}

export default logger;
