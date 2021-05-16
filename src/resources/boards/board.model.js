import { v4 as uuidv4 } from 'uuid';

export default class Board {
  constructor({
    id = uuidv4(),
    title = 'New board',
    columns = { id: null, title: 'New column', order: 0 },
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}
