import { compare, hash } from 'bcrypt';
import { IHashProvider } from '../models/IHashProvider';
import { ICompareHashDTO } from '../../dtos/ICompareHashDTO';

export class BCryptHashProvider implements IHashProvider {
  async hash(phrase: string): Promise<string> {
    return hash(phrase, 10);
  }

  async compare({ cypher, phrase }: ICompareHashDTO): Promise<boolean> {
    return compare(phrase, cypher);
  }
}
