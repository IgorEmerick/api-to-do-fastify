import { Project } from '@modules/project/infra/typeorm/Project';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

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
}
