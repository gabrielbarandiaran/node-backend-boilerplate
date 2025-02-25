import express, { Router } from 'express';
import { userRouter } from './user.controller';

const v1Router: Router = express.Router();

v1Router.use('/user', userRouter);

// All routes go here

export { v1Router };
