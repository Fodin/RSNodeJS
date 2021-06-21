import { getRepository } from 'typeorm';
import { Board } from './board.model';

const getAll = async (): Promise<Board[]> => getRepository(Board).find();

const create = async (board: Board): Promise<Board> => {
  const newBoard = await getRepository(Board).save(board);
  if (!newBoard) {
    throw new Error('It is impossible to create new board');
  }
  return newBoard;
};

const getById = async (id: string): Promise<Board | undefined> =>
  getRepository(Board).findOne(id);

const update = async (id: string, board: Board): Promise<Board | undefined> => {
  const updatedBoard = await getRepository(Board).update(id, board);
  if (!updatedBoard) return undefined;
  return updatedBoard.raw;
};

const remove = async (id: string): Promise<boolean> =>
  !!(await getRepository(Board).delete(id));

export const boardsRepo = { getAll, create, getById, update, remove };
