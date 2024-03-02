import { Router } from 'express';

const router = Router();

/**
 * @swagger
 * /health-check:
 *  get:
 *    tags: 
 *      - HealthCheck
 *    summary: Verifica el estado del servicio
 *    description: Permite verificar el estado del servicio.
 *    responses:
 *      '200':
 *        description: El servicio está en ejecución.
 */
router.get('/health-check', (req, res) => {
  res.status(200);
  res.send('OK');
});

export default router;
