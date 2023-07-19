import { ICompareHashDTO } from '../../dtos/ICompareHashDTO';

export interface IHashProvider {
  hash(phrase: string): Promise<string>;
  compare(phrases_to_compare: ICompareHashDTO): Promise<boolean>;
}
