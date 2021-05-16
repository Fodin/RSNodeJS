import * as db from '../../common/database.js';

const getAll = async () => db.getAllUsers();
const createUser = async (user) => db.createUser(user);
const getById = async (id) => db.getUserById(id);

export { getAll, createUser, getById };
