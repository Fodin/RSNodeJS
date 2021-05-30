import User from '../resources/users/user.model.js';
import Board from '../resources/boards/board.model.js';
import Task from '../resources/tasks/task.model.js';

let users = [];
let boards = [new Board()];
let tasks = [new Task()];

// Users
/**
 * Returns all users records
 * @returns {User[]} Return array of all users
 */
const getAllUsers = () => users;

/**
 * Creates new user and returns it
 * @param user {object} name, login, password of new user
 * @returns {User} user object
 */
const createUser = (user) => {
  const newUser = new User(user);
  users.push(newUser);
  return newUser;
};

/**
 * Returns user specified by Id
 * @param id {string} - id of user
 * @returns {User|[]} User object or empty array if found nothing
 */
const getUserById = (id) => users.filter((user) => user.id === id)[0];

/**
 * Updates user data
 * @param id {string} - id of user
 * @param userData {object} - new user data
 * @returns {User|undefined} returns updated User or undefined if found nothing
 */
const updateUser = (id, userData) => {
  if (!users.some((user) => user.id === id)) {
    return undefined;
  }
  users = users.filter((user) => user.id !== id);
  users.push({ id, ...userData });
  return { id, ...userData };
};

/**
 * Removes user by Id
 * @param id {string} id of user
 * @returns {boolean} returns True if success and False if Id was not found
 */
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

// Boards
/**
 * Returns all boards records
 * @returns {Board[]} return array of Board objects
 */
const getAllBoards = () => boards;

/**
 * Creates new board
 * @param board {object} - object with title and columns
 * @returns {Board}
 */
const createBoard = (board) => {
  const newBoard = new Board(board);
  boards.push(newBoard);
  return newBoard;
};

/**
 * Returns board specified by Id
 * @param id {string} id of board
 * @returns {Board|[]} returns Board object or empty array if found nothing
 */
const getBoardById = (id) => boards.filter((board) => board.id === id)[0];

/**
 * Updates board
 * @param id {string} id of board
 * @param boardData {object} new title and columns
 * @returns {Board|undefined} returns updated Board or undefined if found nothing
 */
const updateBoard = (id, boardData) => {
  if (!boards.some((board) => board.id === id)) {
    return undefined;
  }
  boards = boards.filter((board) => board.id !== id);
  boards.push({ id, ...boardData });
  return { id, ...boardData };
};

/**
 * Removes Board and it's tasks records
 * @param id {string} id of board
 * @returns {boolean} returns True if success and False if Id was not found
 */
const removeBoard = (id) => {
  if (!boards.some((board) => board.id === id)) {
    return false;
  }
  boards = boards.filter((board) => board.id !== id);
  tasks = tasks.filter((task) => task.boardId !== id);
  return true;
};

// Tasks
/**
 * Returns all tasks records
 * @returns {Task[]} return array of Task objects
 */
const getAllTasks = () => tasks;

/**
 * Creates new task
 * @param task {object} object with title, order, description, userId,
 * boardId and columnId fields
 * @returns {Task} - new Task object
 */
const createTask = (task) => {
  const newTask = new Task(task);
  tasks.push(newTask);
  return newTask;
};

/**
 * Returns Task specified by Id
 * @param id {string} id of task
 * @returns {Task|[]} returns Task or empty array if found nothing
 */
const getTaskById = (id) => tasks.filter((task) => task.id === id)[0];

/**
 * Update task
 * @param id {string} id of task
 * @param taskData {object} object with new data of Task
 * @returns {Task|undefined} returns Task or undefined if found nothing
 */
const updateTask = (id, taskData) => {
  if (!tasks.some((task) => task.id === id)) {
    return undefined;
  }
  tasks = tasks.filter((task) => task.id !== id);
  tasks.push({ id, ...taskData });
  return { id, ...taskData };
};

/**
 * Remove Task
 * @param id {string} id of task
 * @returns {boolean} returns True if success and False if Id was not found
 */
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
