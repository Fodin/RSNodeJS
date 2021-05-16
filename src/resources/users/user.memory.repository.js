import * as db from '../../common/database.js';

const getAll = async () => db.getAllUsers();
const create = async (user) => db.createUser(user);
const getById = async (id) => db.getUserById(id);
const update = async (id, user) => db.updateUser(id, user);
const remove = async (id) => db.removeUser(id);

export { getAll, create, getById, update, remove };
