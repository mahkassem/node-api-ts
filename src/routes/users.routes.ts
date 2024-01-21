import { Router, Request, Response } from 'express';

// New Router instance
const router = Router();

// Users routes
router.get('/', (req: Request, res: Response) => {
  res.send('Users route!');
});

router.get('/:id', (req: Request, res: Response) => {
  res.send(`User ${req.params.id} route!`);
});

export default router;
