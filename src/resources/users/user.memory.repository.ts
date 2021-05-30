import * as db from '../../common/database.js';
import User from './user.model.js';

const getAll = async (): Promise<User[]> => db.getAllUsers();
const create = async (user: User): Promise<User> => db.createUser(user);
const getById = async (id: string): Promise<User|null> => db.getUserById(id);
const update = async (id: string, user: User): Promise<User|null> => db.updateUser(id, user);
const remove = async (id: string): Promise<boolean> => db.removeUser(id);

export { getAll, create, getById, update, remove };
