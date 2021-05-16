import { Router } from 'express';
import * as boardsService from './board.service.js';

const router = Router();

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  res.json(boards);
});

router.route('/').post(async (req, res) => {
  const board = await boardsService.create(req.body);
  res.status(201).json(board);
});

router.route('/:id').get(async (req, res) => {
  const board = await boardsService.getById(req.params.id);
  if (board) {
    res.status(200).json(board);
  } else {
    res.status(404).send('Board not found');
  }
});

router.route('/:id').put(async (req, res) => {
  const board = await boardsService.update(req.params.id, req.body);
  if (board) {
    res.status(200).json(board);
  } else {
    res.status(400).send('Bad request');
  }
});

router.route('/:id').delete(async (req, res) => {
  const board = await boardsService.remove(req.params.id);
  if (board) {
    res.status(204).send('The board has been deleted');
  } else {
    res.status(201).send('Bad request');
  }
});

export default router;
