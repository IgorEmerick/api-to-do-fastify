import { HttpError } from '@shared/errors/HttpError';
import { IUserRepository } from '../repositories/models/IUserRepository';
import { IHashProvider } from '../providers/models/IHashProvider';
import { createUserBodyType } from '../infra/http/schemas/createUserBodySchema';

export class CreateUserService {
  constructor(
    private userRepository: IUserRepository,
    private hashProvider: IHashProvider,
  ) {}

  async execute({ email, name, password }: createUserBodyType) {
    const existUserWithEmail = await this.userRepository.findByEmail(email);

    if (existUserWithEmail) {
      throw new HttpError(400, 'Already exists an user with this email!');
    }

    const cypherPassword = await this.hashProvider.hash(password);

    return this.userRepository.create({
      email,
      name,
      password: cypherPassword,
    });
  }
}
