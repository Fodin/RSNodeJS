import * as usersRepo from './user.memory.repository.js';

const getAll = () => usersRepo.getAll();
const create = (user) => usersRepo.create(user);
const getById = (id) => usersRepo.getById(id);
const update = (id, user) => usersRepo.update(id, user);
const remove = (id) => usersRepo.remove(id);

export { getAll, create, getById, update, remove };
