import { User } from '@prisma/client';
import { inject, injectable } from 'inversify';
import { IUserRepository } from '@/interfaces/repositories/user.repository.interface';
import { PrismaService } from '../prisma.config';

@injectable()
export class UserRepository implements IUserRepository {
  constructor(@inject(PrismaService) private prisma: PrismaService) {}

  async getAllUsers(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async createUser(name: string, email: string): Promise<User> {
    return await this.prisma.user.create({
      data: { name, email },
    });
  }
}
