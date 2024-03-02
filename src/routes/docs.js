import { Router } from "express";
import swaggerUiExpress from "swagger-ui-express";

import swaggerSpec from "../swagger-config.js";

const swaggerUI = swaggerUiExpress;

const router = Router();

router.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

router.get('/json', (req, res) => res.json(swaggerSpec));

export default router;
