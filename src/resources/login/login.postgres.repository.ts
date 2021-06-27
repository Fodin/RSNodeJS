import { getRepository } from 'typeorm';
import { User } from '../users/user.model';

const getUser = async (login: string): Promise<User | undefined> =>
  getRepository(User).findOne({ login });

export const loginRepo = { getUser };
