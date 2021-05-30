import * as tasksRepo from './task.memory.repository.js';

/**
 * Returns all tasks records
 * @returns {Task[]} return array of Task objects
 */
const getAll = () => tasksRepo.getAll();

/**
 * Creates new task
 * @param task {object} object with title, order, description, userId,
 * boardId and columnId fields
 * @returns {Task} - new Task object
 */
const create = (task) => tasksRepo.create(task);

/**
 * Returns Task specified by Id
 * @param id {string} id of task
 * @returns {Task|[]} returns Task or empty array if found nothing
 */
const getById = (id) => tasksRepo.getById(id);

/**
 * Update task
 * @param id {string} id of task
 * @param task {object} object with new data of Task
 * @returns {Task|undefined} returns Task or undefined if found nothing
 */
const update = (id, task) => tasksRepo.update(id, task);

/**
 * Remove Task
 * @param id {string} id of task
 * @returns {boolean} returns True if success and False if Id was not found
 */
const remove = (id) => tasksRepo.remove(id);

export { getAll, create, getById, update, remove };
