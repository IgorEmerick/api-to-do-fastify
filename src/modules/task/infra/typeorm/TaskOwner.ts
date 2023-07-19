import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Task } from './Task';
import { User } from '@modules/user/infra/typeorm/User';

@Entity('tasks_owners')
export class TaskOwner {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @Column()
  task_id: string;

  @ManyToOne(() => Task, task => task.owners)
  @JoinColumn({ name: 'task_id' })
  task: Task;

  @Column()
  user_id: string;

  @ManyToOne(() => User, user => user.tasks)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
