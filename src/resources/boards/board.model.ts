import { v4 as uuidv4 } from 'uuid';

type Column = {
  id: string | null;
  title: string;
  order: number;
}

export default class Board {
  public id: string;

  public title: string;

  public columns: Column[];

  constructor({
    id = uuidv4(),
    title = 'New board',
    columns = [{ id: null, title: 'New column', order: 0 } as Column],
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}
