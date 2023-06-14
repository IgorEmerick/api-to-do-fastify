import { ICreateUserDTO } from '@modules/user/dtos/ICreateUserDTO';
import { User } from '@modules/user/infra/typeorm/User';
import { DataSource, In, Repository } from 'typeorm';
import { IUserRepository } from '../models/IUserRepository';

export class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor(defaultDataSource: DataSource) {
    this.repository = defaultDataSource.getRepository(User);
  }

  async create(user: ICreateUserDTO): Promise<User> {
    const newUser = this.repository.create(user);

    return this.repository.save(newUser);
  }

  async findByEmail(email: string): Promise<User> {
    return this.repository.findOneBy({ email });
  }

  async findByEmails(emails: string[]): Promise<User[]> {
    return this.repository.findBy({ email: In(emails) });
  }

  async findById(id: string): Promise<User> {
    return this.repository.findOneBy({ id });
  }
}
