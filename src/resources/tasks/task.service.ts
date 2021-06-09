import { tasksRepo } from './task.memory.repository';
import { Task } from './task.model';

const getAll = (): Promise<Task[]> => tasksRepo.getAll();

const create = (task: Task):Promise<Task> => tasksRepo.create(task);

const getById = (id: string):Promise<Task|undefined> => tasksRepo.getById(id);

const update = (id: string, task: Task):Promise<Task|undefined> => tasksRepo.update(id, task);

const remove = (id: string): Promise<boolean> => tasksRepo.remove(id);

export const tasksService = { getAll, create, getById, update, remove };
