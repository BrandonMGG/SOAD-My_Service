import { Router } from 'express';

import { getRecommendation } from '../controller.js';

const router = Router();

router.post('/', async (req, res) => {
    const { tipo1, data1, endpoint, data2, tipo2 } = req.body;

    const recomendacion = await getRecommendation(tipo1, data1, endpoint, tipo2, data2, res);

    res.json({ recomendacion });
});

export default router;
