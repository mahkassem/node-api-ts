import { Router } from 'express';
import homeRouter from './home.routes';
import usersRouter from './users.routes';

// Create a new Router instance
const router = Router();

// Mount the routers
router.use('/', homeRouter);
router.use('/users', usersRouter);

export default router;
