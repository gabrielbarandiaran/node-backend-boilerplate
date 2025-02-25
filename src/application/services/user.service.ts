import { User } from '@prisma/client';
import { injectable, inject } from 'inversify';
import { IUserRepository } from '@/interfaces/repositories/user.repository.interface';

@injectable()
export class UserService {
  constructor(@inject('IUserRepository') private userRepo: IUserRepository) {}

  async getUsers(): Promise<User[]> {
    return this.userRepo.getAllUsers();
  }

  async addUser(name: string, email: string): Promise<User> {
    return this.userRepo.createUser(name, email);
  }
}
