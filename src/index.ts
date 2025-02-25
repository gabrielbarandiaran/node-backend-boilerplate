import express, { Express } from 'express';
import dotenv from 'dotenv';
import { mainRouter } from './infra/http/controllers/controller.modules';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use('/api', mainRouter)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
