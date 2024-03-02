import express from 'express';
import morgan from 'morgan';


// import axios from 'axios';

import docsRouter from './routes/docs.js';
import healtCheckRouter from './routes/health-check.js';
import recommendationRouter from './routes/recommendation.js';

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/api-docs', docsRouter);

app.use('/', healtCheckRouter);
app.use('/recommendation', recommendationRouter);

app.listen(PORT, () => {
	console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
