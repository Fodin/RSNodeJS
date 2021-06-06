import Express, { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as tasksService from './task.service.js';

const router = Router({ mergeParams: true });

router.route('/').get(async (_req, res) => {
  const tasks = await tasksService.getAll();
  res.status(StatusCodes.OK).json(tasks);
});

router.route('/').post(async (req: Express.Request, res) => {
  const { boardId } = req.params;
  const task = await tasksService.create({ ...req.body, boardId} );
  res.status(StatusCodes.CREATED).json(task);
});

router.route('/:id').get(async (req, res) => {
  const task = await tasksService.getById(req.params.id);
  if (task) {
    res.status(StatusCodes.OK).json(task);
  } else {
    res.status(StatusCodes.NOT_FOUND).send('Task not found');
  }
});

router.route('/:id').put(async (req, res) => {
  const task = await tasksService.update(req.params.id, req.body);
  if (task) {
    res.status(StatusCodes.OK).json(task);
  } else {
    res.status(StatusCodes.BAD_REQUEST).send('Bad request');
  }
});

router.route('/:id').delete(async (req, res) => {
  const task = await tasksService.remove(req.params.id);
  if (task) {
    res.status(StatusCodes.NO_CONTENT).send('The task has been deleted');
  } else {
    res.status(StatusCodes.BAD_REQUEST).send('Bad request');
  }
});

export default router;
