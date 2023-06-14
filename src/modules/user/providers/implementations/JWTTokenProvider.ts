import { IGenerateTokenDTO } from '@modules/user/dtos/IGenerateTokenDTO';
import { ITokenProvider } from '../models/ITokenProvider';
import { sign, verify } from 'jsonwebtoken';
import { config } from 'dotenv';

config();

export class JWTTokenProvider implements ITokenProvider {
  async generateToken({
    expires_in,
    payload,
  }: IGenerateTokenDTO): Promise<string> {
    return sign(payload, process.env.AUTHENTICATION_SECRET, {
      expiresIn: expires_in,
    });
  }

  async verifyToken<T>(token: string): Promise<T> {
    return verify(token, process.env.AUTHENTICATION_SECRET) as T;
  }
}
