import express, { Router } from 'express';
import { v1Router } from '@/infra/http/controllers/v1/v1-controller.module';

const mainRouter: Router = express.Router();

mainRouter.use('/v1', v1Router);

// All routes go here

export { mainRouter };
