import { Container } from 'inversify';
import { PrismaService } from './infra/db/prisma/prisma.config';
import { IUserRepository } from './interfaces/repositories/user.repository.interface';
import { UserService } from './application/services/user.service';
import { UserController } from './infra/http/controllers/v1/user.controller';
import { UserRepository } from './infra/db/prisma/repositories/user.repository';

const container = new Container();
// App
container.bind<PrismaService>(PrismaService).toSelf().inSingletonScope();
// User
container.bind<IUserRepository>('IUserRepository').to(UserRepository);
container.bind<UserService>(UserService).toSelf();
container.bind<UserController>(UserController).toSelf();

export { container };
