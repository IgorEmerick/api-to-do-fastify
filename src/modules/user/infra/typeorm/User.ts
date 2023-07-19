import { ProjectMember } from '@modules/project/infra/typeorm/ProjectMember';
import { TaskOwner } from '@modules/task/infra/typeorm/TaskOwner';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

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
