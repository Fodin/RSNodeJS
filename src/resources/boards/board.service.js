import * as boardsRepo from './board.memory.repository.js';

const getAll = () => boardsRepo.getAll();
const create = (board) => boardsRepo.create(board);
const getById = (id) => boardsRepo.getById(id);
const update = (id, board) => boardsRepo.update(id, board);
const remove = (id) => boardsRepo.remove(id);

export { getAll, create, getById, update, remove };
