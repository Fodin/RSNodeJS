import jwt, { Secret } from 'jsonwebtoken';
import { Response, Request, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { getRepository } from 'typeorm';
import { User } from '../resources/users/user.model';
import { JWT_SECRET_KEY } from './config';
import { ErrorHandler } from './errorHandler';

const validation = (req: Request, _res: Response, next: NextFunction): void => {
  if (req.method === 'OPTIONS') {
    next();
  } else {
    const sessionToken = req.headers.authorization || '';

    if (!sessionToken) {
      next(new ErrorHandler(StatusCodes.UNAUTHORIZED, 'No token provided.'));
      return
    }

    if (sessionToken.split(' ')[0] !== `Bearer`) {
      next(new ErrorHandler(StatusCodes.UNAUTHORIZED, `Wrong authentication method. ${sessionToken.split(' ')[0]}`));
      return;
    }

    const token: string = sessionToken.split(' ')[1] || '';

    jwt.verify(token, JWT_SECRET_KEY as Secret, async (_, decoded) => {
      if (decoded) {
        const user = await getRepository(User).findOne({
          id: decoded['userId'],
          login: decoded['login'],
        });

        if (!user) {
          next(new ErrorHandler(StatusCodes.UNAUTHORIZED, 'User not found'));
          return;
        }

        next();
      } else {
        next(new ErrorHandler(StatusCodes.UNAUTHORIZED, 'Authorization failed'));
      }
    });
  }
};

export { validation };
