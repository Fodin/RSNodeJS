import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import jwt, { Secret } from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { loginService } from './login.service';
import { ErrorHandler } from '../../common/errorHandler';
import { JWT_SECRET_KEY } from '../../common/config';

const router = Router();

router.route('/').post(async (req, res, next) => {
  const user = await loginService.getUser(req.body.login).catch((e) => next(e));

  if (user) {
    if (!bcrypt.compareSync(req.body.password, user.password as string)) {
      next(new ErrorHandler(StatusCodes.FORBIDDEN, 'Incorrect password'));
      return;
    }

    res.json({
      token: jwt.sign(
        {
          userId: user.id,
          login: user.login,
        },
        JWT_SECRET_KEY as Secret,
        { expiresIn: '72h' }
      ),
    });
  } else {
    next(new ErrorHandler(StatusCodes.FORBIDDEN, 'User not found'));
  }
});

export { router as loginRouter };
