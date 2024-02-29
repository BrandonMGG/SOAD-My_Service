// Importing required modules
import express from 'express';
import dotenv from 'dotenv';
import nodemon from 'nodemon';
import fs from 'fs'
import { createRequire } from 'module';

// Loading environment variables from .env file
dotenv.config();
//acceso a la base de datos
const database=JSON.parse(fs.readFileSync('./database.json'))    
console.log("base de  datos de prueba",database)
// Creating an Express application
const app = express();

// Define a route



app.get('/recomendar-por-plato/:plato', (req, res) => {
    const plato = req.params.plato;
    const data = JSON.parse(fs.readFileSync('./database.json'))  
  
    if (!data[plato]) {
      res.status(404).send('Plato no encontrado');
      return;
    }
  
    const postre = data[plato].postre;
    const bebida = data[plato].bebida;
  
    res.json({
      postre,
      bebida
    });
  });
  
  // Ruta para obtener recomendaciones por bebida
  app.get('/recomendar-por-bebida/:bebida', (req, res) => {
    const bebida = req.params.bebida;
    const data = JSON.parse(fs.readFileSync('./database.json'))  
  
    let plato;
    let postre;
  
    for (const platoKey in data) {
      if (data[platoKey].bebida === bebida) {
        plato = data[platoKey].plato;
        postre = data[platoKey].postre;
        break;
      }
    }
  
    if (!plato) {
      res.status(404).send('Bebida no encontrada');
      return;
    }
  
    res.json({
      plato,
      postre
    });
  });

  app.get('/recomendar-por-postre/:postre', (req, res) => {
    const postre = req.params.postre;
    const data = JSON.parse(fs.readFileSync('./database.json'))  
  
    let plato;
    let bebida;
  
    for (const platoKey in data) {
      if (data[platoKey].postre === postre) {
        plato = data[platoKey].plato;
        bebida = data[platoKey].bebida;
        break;
      }
    }
  
    if (!plato) {
      res.status(404).send('Postre no encontrado');
      return;
    }
  
    res.json({
      plato,
      bebida
    });
  });

app.post("/",()=>{})
// Define the port
const PORT = process.env.PORT || 8888 ; // Use port from environment variable or default to 3000

// Start the server
app.listen(PORT, () => {
    console.log(`The application is listening on port ${PORT}`);
    
});

