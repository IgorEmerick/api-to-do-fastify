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
import { Task } from './Task';
import { Project } from '../../../project/infra/typeorm/Project';

@Entity('task_stages')
export class TaskStage {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  name: string;

  @Column()
  color: string;

  @Column()
  project_id: string;

  @ManyToOne(() => Project, project => project.stages)
  @JoinColumn({ name: 'project_id' })
  project: Project;

  @OneToMany(() => Task, task => task.stage)
  tasks: Task[];
}
