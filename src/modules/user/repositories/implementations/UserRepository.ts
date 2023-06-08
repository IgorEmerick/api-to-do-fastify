import { ICreateUserDTO } from '@modules/user/dtos/ICreateUserDTO';
import { User } from '@modules/user/infra/typeorm/User';
import { DataSource, Repository } from 'typeorm';
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
}
