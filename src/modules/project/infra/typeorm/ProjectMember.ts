import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Project } from './Project';
import { User } from '../../../user/infra/typeorm/User';

@Entity('projects_members')
export class ProjectMember {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  project_id: string;

  @ManyToOne(() => Project, project => project.members)
  @JoinColumn({ name: 'project_id' })
  project: Project;

  @Column()
  user_id: string;

  @ManyToOne(() => User, user => user.projects)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  permission: string;
}
