import User from '../resources/users/user.model.js';
import Board from '../resources/boards/board.model.js';
import Task from '../resources/tasks/task.model.js';

let users: User[] = [];
let boards = [new Board()];
let tasks = [new Task()];

// Users
const getAllUsers = (): User[] => users;

const createUser = (user: User): User => {
  const newUser = new User(user);
  users.push(newUser);
  return newUser;
};

const getUserById = (id: string): User|null => {

  const u = users.filter((user) => user.id === id)[0];
  return u || null;
}

const updateUser = (id: string, userData: User): User|null => {
  if (!users.some((user) => user.id === id)) {
    return null;
  }
  users = users.filter((user) => user.id !== id);
  users.push({ ...userData, id });
  return { ...userData, id };
};

const removeUser = (id: string): boolean => {
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

// Boards
const getAllBoards = (): Board[] => boards;

const createBoard = (board: Board): Board => {
  const newBoard = new Board(board);
  boards.push(newBoard);
  return newBoard;
};

const getBoardById = (id: string): Board|undefined => boards.filter((board) => board.id === id)[0];

const updateBoard = (id: string, boardData: Board): Board|undefined => {
  if (!boards.some((board) => board.id === id)) {
    return undefined;
  }
  boards = boards.filter((board) => board.id !== id);
  boards.push({ ...boardData, id });
  return { ...boardData, id };
};

const removeBoard = (id: string): boolean => {
  if (!boards.some((board) => board.id === id)) {
    return false;
  }
  boards = boards.filter((board) => board.id !== id);
  tasks = tasks.filter((task) => task.boardId !== id);
  return true;
};

// Tasks
const getAllTasks = (): Task[] => tasks;

const createTask = (task: Task): Task => {
  const newTask = new Task(task);
  tasks.push(newTask);
  return newTask;
};

const getTaskById = (id: string): Task|undefined => tasks.filter((task) => task.id === id)[0];

const updateTask = (id: string, taskData: Task): Task|undefined => {
  if (!tasks.some((task) => task.id === id)) {
    return undefined;
  }
  tasks = tasks.filter((task) => task.id !== id);
  tasks.push({ ...taskData, id });
  return { ...taskData, id };
};

const removeTask = (id: string): boolean => {
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
