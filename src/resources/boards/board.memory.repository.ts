import * as db from '../../common/database.js';
import Board from './board.model.js';

const getAll = async (): Promise<Board[]> => db.getAllBoards();
const create = async (board: Board): Promise<Board> => db.createBoard(board);
const getById = async (id: string): Promise<Board|undefined> => db.getBoardById(id);
const update = async (id: string, board: Board): Promise<Board|undefined> => db.updateBoard(id, board);
const remove = async (id: string): Promise<boolean> => db.removeBoard(id);

export { getAll, create, getById, update, remove };
