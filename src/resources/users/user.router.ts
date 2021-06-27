import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import bcrypt from 'bcrypt';
import { User } from './user.model';
import { usersService } from './user.service';
import { ErrorHandler } from '../../common/errorHandler';

const router = Router();

// Get all users
router.route('/').get(async (_req, res, next) => {
  try {
    const users = await usersService.getAll();
    res.json(users.map(User.toResponse));
  } catch (err) {
    next(err);
  }
});

// Create user
router.route('/').post(async (req, res, next) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 8);
    const user = await usersService.create({ ...req.body, password: hash});
    res.status(StatusCodes.CREATED).json(User.toResponse(user));
  } catch (err) {
    next(err);
  }
});

// Get user
router.route('/:id').get(async (req, res, next) => {
  const user = await usersService.getById(req.params.id).catch((e) => next(e));
  if (user) {
    res.json(User.toResponse(user));
  } else {
    next(new ErrorHandler(StatusCodes.NOT_FOUND, 'User not found'));
  }
});

// Update user
router.route('/:id').put(async (req, res, next) => {
  const user = await usersService.update(req.params.id, req.body).catch((e) => next(e));
  if (user) {
    res.json(User.toResponse(user));
  } else {
    next(new ErrorHandler(StatusCodes.BAD_REQUEST, 'Bad request'));
  }
});

// Delete user
router.route('/:id').delete(async (req, res, next) => {
  const user = await usersService.remove(req.params.id).catch((e) => next(e));
  if (user) {
    res.status(StatusCodes.NO_CONTENT).send('The user has been deleted');
  } else {
    next(new ErrorHandler(StatusCodes.BAD_REQUEST, 'Bad request'));
  }
});

export { router as usersRouter };
