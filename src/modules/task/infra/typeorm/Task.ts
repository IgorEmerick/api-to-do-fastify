import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { TaskStage } from './TaskStage';
import { TaskOwner } from './TaskOwner';

@Entity('tasks')
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  stage_id: string;

  @ManyToOne(() => TaskStage, stage => stage.tasks)
  @JoinColumn({ name: 'stage_id' })
  stage: TaskStage;

  @OneToMany(() => TaskOwner, owner => owner.task)
  owners: TaskOwner[];
}
