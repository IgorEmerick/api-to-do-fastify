export class HttpError {
  public readonly statusCode: number;
  public readonly message: string;

  constructor(status: number, message: string) {
    this.statusCode = status;
    this.message = message;
  }
}
