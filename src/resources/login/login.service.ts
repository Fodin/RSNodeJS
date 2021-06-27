import { User } from '../users/user.model';
import { loginRepo } from './login.postgres.repository';

const getUser = (login: string) : Promise <User | undefined> => loginRepo.getUser(login);

export const loginService = { getUser };
