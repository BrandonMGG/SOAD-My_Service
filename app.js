// Importing required modules
import express, { response } from 'express';
import dotenv from 'dotenv';
import nodemon from 'nodemon';
import fs from 'fs'
import bodyParser from 'body-parser';
import morgan from 'morgan';

// Loading environment variables from .env file
dotenv.config();
//acceso a la base de datos
const database=JSON.parse(fs.readFileSync('./database.json'))    

// Creating an Express application
const app = express();
app.use(bodyParser.json())
app.use(morgan('dev'))
// Define a route
// Endpoint to get recommendations
app.get("/",(req,res)=>{
    res.send("todo bien")
}
)
app.post('/recomendacion', (req, res) => {
    const {request}=req.body
    //const { categoria, input, responseSource } = req.body;
    //validar que se dieron las peticiones
    // Validar si se proporcionaron solicitudes
    if (!Array.isArray(request)) {
        return res.status(400).json({ error: 'los datos no vienen en lista' });
        }

    const responses = [];
  
    // Validacion de los campos requeridos
    request.forEach(element => {
        if (!element.categoria || !element.input || !element.responseSource) {
            response.push({ error: 'se requiere este campo' });
            return
          } 
          const categoryLowerCase = element.categoria.toLowerCase();
          if (!['postres', 'platoPrincipal', 'bebidas'].includes(categoryLowerCase)) {
            response.push({ error: 'no se encuentra este tipo de categoria' });
            return
          }
    
          let recommendation;
          switch (categoryLowerCase) {
            case 'postres':
              recommendation = database.postres[Math.floor(Math.random() * database.postres.length)];
              break;
            case 'platoPrincipal':
              recommendation = database.mainCourses[Math.floor(Math.random() * database.platoPrincipal.mainCourses.length)];
              break;
            case 'bebidas':
              recommendation = database.bebidas[Math.floor(Math.random() * database.bebidas.length)];
              break;
          }
         
    let response;
    if (element.responseSource === 'static') {
      response = { recommendation };
    } else if (element.responseSource === 'aiEndpoint') {
      // Llamar al endpoint de IA
      // Código para llamar al endpoint de IA
      response = { recommendation }; // Para propósitos de demostración, se utiliza una recomendación simulada
    } else if (element.responseSource === 'dynamicEndpoint') {
      // Llamar al endpoint dinámico
      // Código para llamar al endpoint dinámico
      response = { recommendation }; // Para propósitos de demostración, se utiliza una recomendación simulada
    }

    responses.push(response);

        
    });
    res.json(responses)

    
})

// Define the port
const PORT = process.env.PORT || 8888 ; // Use port from environment variable or default to 3000

// Start the server
app.listen(PORT, () => {
    console.log(`The application is listening on port ${PORT}`);
         
});
