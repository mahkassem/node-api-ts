import { Request, Response } from 'express';
import {
  User,
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} from '../models/users.models';

export const getUsersController = (req: Request, res: Response): void => {
  const users: User[] = getUsers();
  res.status(200).json({ users });
};

export const getUserByIdController = (req: Request, res: Response): void => {
  const id: number = parseInt(req.params.id, 10);
  const user: User | undefined = getUserById(id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

export const createUserController = (req: Request, res: Response): void => {
  const user: User = req.body;
  createUser(user);
  res.status(201).json({
    message: 'User created',
    user,
  });
};

export const updateUserController = (req: Request, res: Response): void => {
  const id: number = parseInt(req.params.id, 10);
  const userUpdate: User = req.body;
  userUpdate.id = id;
  updateUser(userUpdate);
  res.status(200).json({
    message: 'User updated',
    user: userUpdate,
  });
};

export const deleteUserController = (req: Request, res: Response): void => {
  const id: number = parseInt(req.params.id, 10);
  deleteUser(id);
  res.status(200).json({
    message: `User ${id} deleted`,
  });
};
