import { Request, Response, Router } from 'express';
import { inject, injectable } from 'inversify';
import { UserService } from '@/application/services/user.service';

@injectable()
export class UserController {
  public router: Router;

  constructor(@inject(UserService) private userService: UserService) {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/', this.getUsers.bind(this));
    this.router.post('/', this.addUser.bind(this));
  }

  private async getUsers(req: Request, res: Response) {
    const users = await this.userService.getUsers();
    res.json(users);
  }

  private async addUser(req: Request, res: Response) {
    const { name, email } = req.body;
    const newUser = await this.userService.addUser(name, email);
    res.json(newUser);
  }
}
