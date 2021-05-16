import * as usersRepo from './user.memory.repository.js';

const getAll = () => usersRepo.getAll();
const create = (user) => usersRepo.createUser(user);
const getById = (id) => usersRepo.getById(id);

export { getAll, create, getById };
