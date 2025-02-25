import { User } from '@prisma/client';

export interface IUserRepository {
  getAllUsers(): Promise<User[]>;
  createUser(name: string, email: string): Promise<User>;
}
