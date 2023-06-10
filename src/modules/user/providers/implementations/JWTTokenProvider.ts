import { IGenerateTokenDTO } from '@modules/user/dtos/IGenerateTokenDTO';
import { ITokenProvider } from '../models/ITokenProvider';
import { sign } from 'jsonwebtoken';
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
}
