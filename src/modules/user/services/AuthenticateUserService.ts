import { HttpError } from '@shared/errors/HttpError';
import { authenticateUserBodyType } from '../infra/http/schemas/authenticateUserBodySchema';
import { ITokenProvider } from '../providers/models/ITokenProvider';
import { IUserRepository } from '../repositories/models/IUserRepository';
import { IHashProvider } from '../providers/models/IHashProvider';

export class AuthenticateUserService {
  constructor(
    private userRepository: IUserRepository,
    private hashProvider: IHashProvider,
    private tokenProvider: ITokenProvider,
  ) {}

  async execute({
    email,
    keep_logged,
    password,
  }: authenticateUserBodyType): Promise<string> {
    const user = await this.userRepository.findByEmail(email);

    const validPassword =
      user &&
      (await this.hashProvider.compare({
        cypher: user.password,
        phrase: password,
      }));

    if (!user || !validPassword) {
      throw new HttpError(401, 'Invalid authentication!');
    }

    return this.tokenProvider.generateToken({
      expires_in: keep_logged ? '30d' : '1d',
      payload: { ...user, password: undefined },
    });
  }
}
