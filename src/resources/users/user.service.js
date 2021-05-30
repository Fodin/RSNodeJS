import * as usersRepo from './user.memory.repository.js';

// Users
/**
 * Returns all users records
 * @returns {Promise<User[]>} resolves to array of all users
 */
const getAll = () => usersRepo.getAll();

/**
 * Creates new user and returns it
 * @param user {object} name, login, password of new user
 * @returns {Promise<User>} resolves to new User object
 */
const create = (user) => usersRepo.create(user);

/**
 * Returns user specified by Id
 * @param id {string} id of user
 * @returns {Promise<User[]>} resolves to array of found Users
 */
const getById = (id) => usersRepo.getById(id);

/**
 * Updates user data
 * @param id {string} id of user
 * @param user {object} new user data
 * @returns {Promise<User|undefined>} resolves to updated User or undefined if found nothing
 */
const update = (id, user) => usersRepo.update(id, user);

/**
 * Removes user by Id
 * @param id {string} id of user
 * @returns {Promise<boolean>} resolves to True if success and False if Id was not found
 */
const remove = (id) => usersRepo.remove(id);

export { getAll, create, getById, update, remove };
