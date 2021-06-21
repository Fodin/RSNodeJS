import { usersRepo } from './user.typeorm.repository';
import { User } from './user.model';

const getAll = (): Promise<User[]> => usersRepo.getAll();

const create = (user: User): Promise<User> => usersRepo.create(user);

const getById = (id: string): Promise<User|undefined> => usersRepo.getById(id);

const update = (id: string, user: User): Promise<User|undefined> => usersRepo.update(id, user);

const remove = (id: string): Promise<boolean> => usersRepo.remove(id);

export const usersService = { getAll, create, getById, update, remove };
