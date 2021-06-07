import * as tasksRepo from './task.memory.repository.js';
import Task from './task.model.js';

const getAll = (): Promise<Task[]> => tasksRepo.getAll();

const create = (task: Task):Promise<Task> => tasksRepo.create(task);

const getById = (id: string):Promise<Task|undefined> => tasksRepo.getById(id);

const update = (id: string, task: Task):Promise<Task|undefined> => tasksRepo.update(id, task);

const remove = (id: string): Promise<boolean> => tasksRepo.remove(id);

export { getAll, create, getById, update, remove };
