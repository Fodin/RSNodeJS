import { boardsRepo } from './board.typeorm.repository';
import { Board } from './board.model';

const getAll = (): Promise<Board[]> => boardsRepo.getAll();

const create = (board: Board): Promise<Board> => boardsRepo.create(board);

const getById = (id: string): Promise<Board|undefined> => boardsRepo.getById(id);

const update = (id: string, board: Board): Promise<Board|undefined> => boardsRepo.update(id, board);

const remove = (id: string): Promise<boolean> => boardsRepo.remove(id);

export const boardsService = { getAll, create, getById, update, remove };
