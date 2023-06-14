import { IGenerateTokenDTO } from '@modules/user/dtos/IGenerateTokenDTO';

export interface ITokenProvider {
  generateToken(options: IGenerateTokenDTO): Promise<string>;
  verifyToken<T>(token: string): Promise<T>;
}
