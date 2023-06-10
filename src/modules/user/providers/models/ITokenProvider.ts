import { IGenerateTokenDTO } from '@modules/user/dtos/IGenerateTokenDTO';

export interface ITokenProvider {
  generateToken(options: IGenerateTokenDTO): Promise<string>;
}
