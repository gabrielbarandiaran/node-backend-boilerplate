import { container } from '@/inversify.config';
import express, { Router } from 'express';
import { UserController } from './user.controller';

const v1Router: Router = express.Router();
const userController = container.get<UserController>(UserController);

v1Router.use('/user', userController.router);

export { v1Router };
