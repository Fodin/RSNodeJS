import { getRepository } from 'typeorm';
import { Task } from './task.model';

const getAll = async (): Promise<Task[]> => getRepository(Task).find();

const create = async (task: Task): Promise<Task> =>  {
  const newTask = await getRepository(Task).save(task);
  if (!newTask) {
    throw new Error('It is impossible to create new task');
  }
  return newTask;
};

const getById = async (id: string): Promise<Task|undefined> => getRepository(Task).findOne(id);

const update = async (id: string, task: Task): Promise<Task|undefined> => {
  const updatedTask = await getRepository(Task).update(id, task);
  if (!updatedTask) return undefined;
  return updatedTask.raw;
} ;

const remove = async (id: string): Promise<boolean> => !!(await getRepository(Task).delete(id));

export const tasksRepo = { getAll, create, getById, update, remove };
