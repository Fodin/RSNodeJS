import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import User from './user.model.js';
import * as usersService from './user.service.js';
import { ErrorHandler } from '../../common/errorHandler.js';

const router = Router();

router.route('/').get(async (_req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

router.route('/').post(async (req, res) => {
  const user = await usersService.create(req.body);
  res.status(StatusCodes.CREATED).json(User.toResponse(user));
});

router.route('/:id').get(async (req, res, next) => {
  const user = await usersService.getById(req.params.id).catch((e) => next(e));
  if (user) {
    res.json(User.toResponse(user));
  } else {
    next(new ErrorHandler(StatusCodes.NOT_FOUND, 'User not found'));
  }
});

router.route('/:id').put(async (req, res, next) => {
  const user = await usersService.update(req.params.id, req.body);
  if (user) {
    res.json(User.toResponse(user));
  } else {
    next(new ErrorHandler(StatusCodes.BAD_REQUEST, 'Bad request'));
  }
});

router.route('/:id').delete(async (req, res, next) => {
  const user = await usersService.remove(req.params.id);
  if (user) {
    res.status(StatusCodes.NO_CONTENT).send('The user has been deleted');
  } else {
    next(new ErrorHandler(StatusCodes.BAD_REQUEST, 'Bad request'));
  }
});

export default router;
