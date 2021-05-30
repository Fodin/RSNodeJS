import User from '../resources/users/user.model.js';
import Board from '../resources/boards/board.model.js';
import Task from '../resources/tasks/task.model.js';

let users = [];
let boards = [new Board()];
let tasks = [new Task()];

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

  tasks.forEach((task) => {
    const currentTask = task;
    if (currentTask.userId === id) {
      currentTask.userId = null;
    }
  });
  return true;
};

const getAllBoards = () => boards;

const createBoard = (board) => {
  const newBoard = new Board(board);
  boards.push(newBoard);
  return newBoard;
};

const getBoardById = (id) => boards.filter((board) => board.id === id)[0];

const updateBoard = (id, boardData) => {
  if (!boards.some((board) => board.id === id)) {
    return undefined;
  }
  boards = boards.filter((board) => board.id !== id);
  boards.push({ id, ...boardData });
  return { id, ...boardData };
};

const removeBoard = (id) => {
  if (!boards.some((board) => board.id === id)) {
    return false;
  }
  boards = boards.filter((board) => board.id !== id);
  tasks = tasks.filter((task) => task.boardId !== id);
  return true;
};

// Tasks
const getAllTasks = () => tasks;

const createTask = (task) => {
  const newTask = new Task(task);
  tasks.push(newTask);
  return newTask;
};

const getTaskById = (id) => tasks.filter((task) => task.id === id)[0];

const updateTask = (id, taskData) => {
  if (!tasks.some((task) => task.id === id)) {
    return undefined;
  }
  tasks = tasks.filter((task) => task.id !== id);
  tasks.push({ id, ...taskData });
  return { id, ...taskData };
};

const removeTask = (id) => {
  if (!tasks.some((task) => task.id === id)) {
    return false;
  }
  tasks = tasks.filter((task) => task.id !== id);
  return true;
};

export {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  removeUser,
  getAllBoards,
  createBoard,
  getBoardById,
  updateBoard,
  removeBoard,
  getAllTasks,
  createTask,
  getTaskById,
  updateTask,
  removeTask,
};
