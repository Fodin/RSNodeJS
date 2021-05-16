import * as db from '../../common/database.js';

const getAll = async () => db.getAllTasks();
const create = async (task) => db.createTask(task);
const getById = async (id) => db.getTaskById(id);
const update = async (id, task) => db.updateTask(id, task);
const remove = async (id) => db.removeTask(id);

export { getAll, create, getById, update, remove };
