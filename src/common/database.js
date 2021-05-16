import User from '../resources/users/user.model.js';

const users = [];
// const tasks = [];
// const columns = [];
// const boards = [];

const getAllUsers = () => users;

const createUser = (user) => {
  const newUser = new User(user);
  users.push(newUser)
  return newUser;
};

const getUserById = (id) => users.filter((user) => user.id === id)[0];

export {
  getAllUsers,
  createUser,
  getUserById,
};

