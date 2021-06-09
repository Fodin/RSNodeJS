import { v4 as uuidv4 } from 'uuid';

export class User {
  public id: string|null;

  public name: string;

  public login: string;

  public password?: string;

  constructor({
    id = uuidv4(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd'
  } = {} as User) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static toResponse(user: User): User {
    const { id, name, login } = user;
    return { id, name, login };
  }
}
