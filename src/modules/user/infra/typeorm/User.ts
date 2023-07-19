import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ProjectMember } from '../../../project/infra/typeorm/ProjectMember';
import { TaskOwner } from '../../../task/infra/typeorm/TaskOwner';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => ProjectMember, project => project.user)
  projects: ProjectMember[];

  @OneToMany(() => TaskOwner, task => task.user)
  tasks: TaskOwner[];
}
