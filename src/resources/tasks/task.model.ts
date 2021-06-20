import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { User } from '../users/user.model';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  order: number;

  @Column()
  description: string;

  @Column({ type: 'varchar', nullable: true })
  userId: string | null;

  @Column({ type: 'varchar', nullable: true })
  boardId: string | null;

  @Column({ type: 'varchar', nullable: true })
  columnId: string | null;

  @ManyToOne(() => User, { onDelete: 'SET NULL' })
  user: User | undefined;

  constructor(
    {
      id = uuidv4(),
      title = 'New task',
      order = 0,
      description = 'No description',
      userId = null,
      boardId = null,
      columnId = null,
    } = {} as Task
  ) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}
