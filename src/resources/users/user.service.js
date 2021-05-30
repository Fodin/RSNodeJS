import * as usersRepo from './user.memory.repository.js';

// Users
/**
 * Returns all users records
 * @returns {User[]} Return array of all users
 */
const getAll = () => usersRepo.getAll();

/**
 * Creates new user and returns it
 * @param user {object} name, login, password of new user
 * @returns {User} user object
 */
const create = (user) => usersRepo.create(user);

/**
 * Returns user specified by Id
 * @param id {string} id of user
 * @returns {User|[]} User object or empty array if found nothing
 */
const getById = (id) => usersRepo.getById(id);

/**
 * Updates user data
 * @param id {string} id of user
 * @param user {object} new user data
 * @returns {User|undefined} returns updated User or undefined if found nothing
 */
const update = (id, user) => usersRepo.update(id, user);

/**
 * Removes user by Id
 * @param id {string} id of user
 * @returns {boolean} returns True if success and False if Id was not found
 */
const remove = (id) => usersRepo.remove(id);

export { getAll, create, getById, update, remove };
