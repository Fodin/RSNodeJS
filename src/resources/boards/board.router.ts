import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { boardsService } from './board.service';
import { ErrorHandler } from '../../common/errorHandler';

const router = Router();

router.route('/').get(async (_req, res, next) => {
  try {
    const boards = await boardsService.getAll();
    res.status(StatusCodes.OK).json(boards);
  } catch (err) {
    next(err);
  }
});

router.route('/').post(async (req, res, next) => {
  try {
    const board = await boardsService.create(req.body);
    res.status(StatusCodes.CREATED).json(board);
  } catch (err) {
    next(err);
  }
});

router.route('/:id').get(async (req, res, next) => {
  const board = await boardsService.getById(req.params.id);
  if (board) {
    res.status(StatusCodes.OK).json(board);
  } else {
    next(new ErrorHandler(StatusCodes.NOT_FOUND, 'Board not found'));
  }
});

router.route('/:id').put(async (req, res, next) => {
  const board = await boardsService.update(req.params.id, req.body);
  if (board) {
    res.status(StatusCodes.OK).json(board);
  } else {
    next(new ErrorHandler(StatusCodes.BAD_REQUEST, 'Bad request'));
  }
});

router.route('/:id').delete(async (req, res, next) => {
  const board = await boardsService.remove(req.params.id);
  if (board) {
    res.status(StatusCodes.NO_CONTENT).send('The board has been deleted');
  } else {
    next(new ErrorHandler(StatusCodes.BAD_REQUEST, 'Bad request'));
  }
});

export { router as boardsRouter };
