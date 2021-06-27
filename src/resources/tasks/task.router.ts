import Express, { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { tasksService } from './task.service';
import { ErrorHandler } from '../../common/errorHandler';

const router = Router({ mergeParams: true });

router.route('/').get(async (_req, res, next) => {
  try {
    const tasks = await tasksService.getAll();
    res.status(StatusCodes.OK).json(tasks);
  } catch (err) {
    next(err);
  }
});

router.route('/').post(async (req: Express.Request, res, next) => {
  try {
    const { boardId } = req.params;
    const task = await tasksService.create({ ...req.body, boardId} );
    res.status(StatusCodes.CREATED).json(task);
  } catch (err) {
    next(err);
  }
});

router.route('/:id').get(async (req, res, next) => {
  const task = await tasksService.getById(req.params.id);
  if (task) {
    res.status(StatusCodes.OK).json(task);
  } else {
    next(new ErrorHandler(StatusCodes.NOT_FOUND, 'Task not found'));
  }
});

router.route('/:id').put(async (req, res, next) => {
  const task = await tasksService.update(req.params.id, req.body);
  if (task) {
    res.status(StatusCodes.OK).json(task);
  } else {
    next(new ErrorHandler(StatusCodes.BAD_REQUEST, 'Bad request'));
  }
});

router.route('/:id').delete(async (req, res, next) => {
  const task = await tasksService.remove(req.params.id);
  if (task) {
    res.status(StatusCodes.NO_CONTENT).send('The task has been deleted');
  } else {
    next(new ErrorHandler(StatusCodes.BAD_REQUEST, 'Bad request'));
  }
});

export { router as tasksRouter};
