import { app } from '@shared/infra/http/app';
import { config } from 'dotenv';

config();

app.listen({ port: Number(process.env.API_PORT) }).then(() => {
  console.log(`Server is listening on port ${process.env.API_PORT}!`);
});
