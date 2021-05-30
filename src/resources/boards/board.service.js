import * as boardsRepo from './board.memory.repository.js';

// Boards
/**
 * Returns all boards records
 * @returns {Board[]} return array of Board objects
 */
const getAll = () => boardsRepo.getAll();

/**
 * Creates new board
 * @param board {object} object with title and columns
 * @returns {Board}
 */
const create = (board) => boardsRepo.create(board);

/**
 * Returns board specified by Id
 * @param id {string} id of board
 * @returns {Board[]} returns array of found Boards
 */
const getById = (id) => boardsRepo.getById(id);

/**
 * Updates board
 * @param id {string} id of board
 * @param board {object} new title and columns
 * @returns {Board|undefined} returns updated Board or undefined if found nothing
 */
const update = (id, board) => boardsRepo.update(id, board);

/**
 * Removes Board and it's tasks records
 * @param id {string} id of board
 * @returns {boolean} returns True if success and False if Id was not found
 */
const remove = (id) => boardsRepo.remove(id);

export { getAll, create, getById, update, remove };
