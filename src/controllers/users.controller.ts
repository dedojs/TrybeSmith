import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import usersService from '../services/users.service';
import Users from '../interfaces/users.interface';

const secret = 'teste';

async function createUser(req: Request, res: Response, next: NextFunction) {
  try {
    const user = req.body as Users;
    const { status } = await usersService.createUser(user);

    const token = jwt.sign({ data: user }, secret);

    return res.status(status).json({ token });
  } catch (error) {
    next(error);
  }
}

async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const { username, password } = req.body;
    // console.log(user);
    if (!username) {
      return res.status(400).json({ message: '"username" is required' });
    }
    const { status, data, message } = await usersService.login(username, password);
    if (!data) return res.status(status).json({ message });
    const token = jwt.sign({ data: username }, secret);
    return res.status(status).json({ token });
  } catch (error) {
    next(error);
  }
}

export = {
  createUser,
  login,
};