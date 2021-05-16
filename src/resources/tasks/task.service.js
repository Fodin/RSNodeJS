import * as tasksRepo from './task.memory.repository.js';

const getAll = () => tasksRepo.getAll();
const create = (task) => tasksRepo.create(task);
const getById = (id) => tasksRepo.getById(id);
const update = (id, task) => tasksRepo.update(id, task);
const remove = (id) => tasksRepo.remove(id);

export { getAll, create, getById, update, remove };
