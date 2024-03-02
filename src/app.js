import fs from 'fs';

import express from 'express';
import morgan from 'morgan';

// import axios from 'axios';

import healtCheckRouter from './routes/health-check.js';
import docsRouter from './routes/docs.js';

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/api-docs', docsRouter);

app.use('/', healtCheckRouter);

app.listen(PORT, () => {
	console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});

// const database = JSON.parse(fs.readFileSync('./database.json'));

// function obtenerPlatoPrincipal(nombre) {
// 	return database.platosPrincipales.find(plato => plato.nombre.toLowerCase() === nombre.toLowerCase());
// }

// function obtenerPostre(nombre) {
// 	return database.postres.find(postre => postre.nombre.toLowerCase() === nombre.toLowerCase());
// }

// function obtenerBebida(nombre) {
// 	return database.bebidas.find(bebida => bebida.nombre.toLowerCase() === nombre.toLowerCase());
// }


// function obtenerRecomendacionPorPlatoPrincipal(platoPrincipal) {
// 	const plato = obtenerPlatoPrincipal(platoPrincipal);
// 	if (!plato) {
// 		return 'Lo siento, no se encontró el plato principal especificado.';
// 	}
// 	return `Para el plato principal '${plato.nombre}', te recomiendo el postre '${plato.postreRecomendado}' y la bebida '${plato.bebidaRecomendada}'.`;
// }

// function obtenerRecomendacionPorPostre(postre) {
// 	const postreEncontrado = obtenerPostre(postre);
// 	if (!postreEncontrado) {
// 		return 'Lo siento, no se encontró el postre especificado.';
// 	}

// 	const platoPrincipal = database.platosPrincipales.find(plato => plato.postreRecomendado.toLowerCase() === postreEncontrado.nombre.toLowerCase());
// 	const bebida = database.bebidas.find(bebida => bebida.nombre.toLowerCase() === platoPrincipal.bebidaRecomendada.toLowerCase());

// 	return `Para el postre '${postreEncontrado.nombre}', te recomiendo el plato principal '${platoPrincipal.nombre}' y la bebida '${bebida.nombre}'.`;
// }

// function obtenerRecomendacionPorBebida(bebida) {
// 	const bebidaEncontrada = obtenerBebida(bebida);
// 	if (!bebidaEncontrada) {
// 		return 'Lo siento, no se encontró la bebida especificada.';
// 	}

// 	const platoPrincipal = database.platosPrincipales.find(plato => plato.bebidaRecomendada.toLowerCase() === bebidaEncontrada.nombre.toLowerCase());
// 	const postre = database.postres.find(postre => postre.nombre.toLowerCase() === platoPrincipal.postreRecomendado.toLowerCase());

// 	return `Para la bebida '${bebidaEncontrada.nombre}', te recomiendo el plato principal '${platoPrincipal.nombre}' y el postre '${postre.nombre}'.`;
// }
