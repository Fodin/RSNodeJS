import { Connection } from 'typeorm';
import bcrypt from 'bcrypt';
import { User } from '../resources/users/user.model';

const createAdmin = async (connection: Connection): Promise<void> => {
  const hash = bcrypt.hashSync('admin', 8);
  try {
    await connection
      .createQueryBuilder()
      .insert()
      .into(User)
      .values([{ name: 'Fodin', login: 'admin', password: hash }])
      .execute();
  } catch {
    process.stdout.write('User "admin" already exists\n');
  }
};

export { createAdmin };
