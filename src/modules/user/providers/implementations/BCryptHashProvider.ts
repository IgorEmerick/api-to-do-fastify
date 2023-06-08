import { hash } from 'bcrypt';
import { IHashProvider } from '../models/IHashProvider';

export class BCryptHashProvider implements IHashProvider {
  async hash(phrase: string): Promise<string> {
    return hash(phrase, 10);
  }
}
