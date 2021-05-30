import * as boardsRepo from './board.memory.repository.js';

// Boards
/**
 * Returns all boards records
 * @returns {Promise<Board[]>} resolves to array of Board objects
 */
const getAll = () => boardsRepo.getAll();

/**
 * Creates new board
 * @param board {object} object with title and columns
 * @returns {Promise<Board>} resolves to new Board object
 */
const create = (board) => boardsRepo.create(board);

/**
 * Returns board specified by Id
 * @param id {string} id of board
 * @returns {Promise<Board[]>} resolves to array of found Boards
 */
const getById = (id) => boardsRepo.getById(id);

/**
 * Updates board
 * @param id {string} id of board
 * @param board {object} new title and columns
 * @returns {Promise<Board|undefined>} resolves to updated Board or undefined if found nothing
 */
const update = (id, board) => boardsRepo.update(id, board);

/**
 * Removes Board and it's tasks records
 * @param id {string} id of board
 * @returns {Promise<boolean>} resolves to True if success and False if Id was not found
 */
const remove = (id) => boardsRepo.remove(id);

export { getAll, create, getById, update, remove };
