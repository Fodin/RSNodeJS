import User from '../resources/users/user.model.js';

let users = [];
// const tasks = [];
// const columns = [];
// const boards = [];

const getAllUsers = () => users;

const createUser = (user) => {
  const newUser = new User(user);
  users.push(newUser);
  return newUser;
};

const getUserById = (id) => users.filter((user) => user.id === id)[0];

const updateUser = (id, userData) => {
  if (!users.some((user) => user.id === id)) {
    return undefined;
  }
  users = users.filter((user) => user.id !== id);
  users.push({ id, ...userData });
  return { id, ...userData };
};

const removeUser = (id) => {
  if (!users.some((user) => user.id === id)) {
    return false;
  }
  users = users.filter((user) => user.id !== id);
  // TODO: Дописать очищение тасков
  return true;
};

export { getAllUsers, createUser, getUserById, updateUser, removeUser };
