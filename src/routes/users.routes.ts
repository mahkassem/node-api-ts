import { Router } from 'express';
import {
  createUserController,
  deleteUserController,
  getUserByIdController,
  getUsersController,
  updateUserController
} from '../controllers/users.controllers';
import {
  validateUser
} from '../utils/validators/users.validators';

// New Router instance
const router = Router();

// Users routes
router.get('/', getUsersController);
router.get('/:id', getUserByIdController);
router.post(
  '/', // path
  validateUser, // middleware
  createUserController // controller
);
router.put(
  '/:id', // path
  validateUser, // middleware
  updateUserController // controller
);
router.delete('/:id', deleteUserController);

export default router;
