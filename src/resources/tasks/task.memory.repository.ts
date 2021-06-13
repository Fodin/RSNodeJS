import { db } from '../../common/database';
import { Task } from './task.model';

const getAll = async (): Promise<Task[]> => db.getAllTasks();
const create = async (task: Task): Promise<Task> => db.createTask(task);
const getById = async (id: string): Promise<Task|undefined> => db.getTaskById(id);
const update = async (id: string, task: Task): Promise<Task|undefined> => db.updateTask(id, task);
const remove = async (id: string): Promise<boolean> => db.removeTask(id);

export const tasksRepo = { getAll, create, getById, update, remove };
