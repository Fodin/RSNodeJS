import { getRepository } from 'typeorm';
import { User } from './user.model';

const getAll = async (): Promise<User[]> => getRepository(User).find();

const create = async (user: User): Promise<User> => {
  const newUser = await getRepository(User).save(user);
  if (!newUser) {
    throw new Error('It is impossible to create new user');
  }
  return newUser;
};

const getById = async (id: string): Promise<User | undefined> => getRepository(User).findOne(id);

const update = async (id: string, user: User): Promise<User|undefined> => {
  const updatedUser = await getRepository(User).update(id, user);
  if (!updatedUser) return undefined;
  return updatedUser.raw;
};

const remove = async (id: string): Promise<boolean> => !!(await getRepository(User).delete(id));

export const usersRepo = { getAll, create, getById, update, remove };
