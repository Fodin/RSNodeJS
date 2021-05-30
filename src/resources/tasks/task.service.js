import * as tasksRepo from './task.memory.repository.js';

/**
 * Returns all tasks records
 * @returns {Promise<Task[]>} resolves to array of Task objects
 */
const getAll = () => tasksRepo.getAll();

/**
 * Creates new task
 * @param task {object} object with title, order, description, userId,
 * boardId and columnId fields
 * @returns {Promise<Task>} resolves to new Task object
 */
const create = (task) => tasksRepo.create(task);

/**
 * Returns Task specified by Id
 * @param id {string} id of task
 * @returns {Promise<Task[]>} resolves to array of found Tasks
 */
const getById = (id) => tasksRepo.getById(id);

/**
 * Update task
 * @param id {string} id of task
 * @param task {object} object with new data of Task
 * @returns {Promise<Task|undefined>} resolves to Task or undefined if found nothing
 */
const update = (id, task) => tasksRepo.update(id, task);

/**
 * Remove Task
 * @param id {string} id of task
 * @returns {Promise<boolean>} resolves to True if success and False if Id was not found
 */
const remove = (id) => tasksRepo.remove(id);

export { getAll, create, getById, update, remove };
