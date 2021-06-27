import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

type Columns = {
  id: string | null;
  title: string;
  order: number;
}

@Entity()
export class Board {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  public title: string;

  @Column("simple-json")
  public columns: Columns[];

  constructor({
    id = uuidv4(),
    title = 'New board',
    columns = [{ id: null, title: 'New column', order: 0 } as Columns],
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}
