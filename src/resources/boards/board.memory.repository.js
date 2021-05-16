import * as db from '../../common/database.js';

const getAll = async () => db.getAllBoards();
const create = async (board) => db.createBoard(board);
const getById = async (id) => db.getBoardById(id);
const update = async (id, board) => db.updateBoard(id, board);
const remove = async (id) => db.removeBoard(id);

export { getAll, create, getById, update, remove };
