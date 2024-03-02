import { Router } from 'express';

import { getRecommendation } from '../controller.js';

const router = Router();

/**
 * @swagger
 * /recommendation:
 *  post:
 *    tags:
 *      - Recommendations
 *    summary: Obtener recomendaciones de comida
 *    description: Permite obtener recomendaciones de comida basado en el input del usuario.
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: array
 *            items:
 *              type: object
 *              properties:
 *                tipo: 
 *                  type: string
 *                input: 
 *                  type: string
 *                endpoint: 
 *                  type: string
 *    responses:
 *      '200':
 *         description: Successfully retrieved recommendations for the given input.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                recomendaciones:
 *                  type: array
 *                  items:
 *                    type: string
 */
router.post('/', async (req, res) => {
  const requests = req.body;

  const recomendaciones = [];

  for (const request of requests) {
    const { tipo, input, endpoint } = request;

    const recomendacion = getRecommendation(tipo, input, endpoint);

    recomendaciones.push(recomendacion);
  }

  res.json({ recomendaciones });
});

export default router;
