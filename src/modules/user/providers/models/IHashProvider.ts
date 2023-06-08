export interface IHashProvider {
  hash(phrase: string): Promise<string>;
}
