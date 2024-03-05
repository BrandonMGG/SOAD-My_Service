import { Router } from 'express';

const router = Router();

router.get('/health-check', (req, res) => {
  res.status(200);
  res.send('OK');
});

export default router;
