import User from './user.model.js';

const users = [];

const getAll = async () => users;
const createUser = async (user) => {
  const newUser = new User(user);
  users.push(newUser)
  return newUser;
};
const getById = async (id) => {
  console.log(id, users);
  return users.filter((user) => user.id === id)[0];
};

export { getAll, createUser, getById };
