import { v4 as uuidv4 } from 'uuid';

export class Task {
  public id: string;

  public title: string;

  public order: number;

  public description: string;

  public userId: string|null;

  public boardId: string|null;

  public columnId: string|null;

  constructor({
    id = uuidv4(),
    title = 'New task',
    order = 0,
    description = 'No description',
    userId = null,
    boardId = null,
    columnId = null,
  } = {} as Task) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}
