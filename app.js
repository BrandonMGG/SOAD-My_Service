import axios from 'axios';
import express from 'express';
import fs from 'fs';
import morgan from 'morgan';
import swaggerSpec from './swagger.js';
import swaggerUI  from 'swagger-ui-express'

import { obtenerData,obtenerRecomendacionPorBebida,obtenerRecomendacionPorPostre,obtenerRecomendacionPorPlatoPrincipal } from './obtenerDATA.js';
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(morgan('dev'));

//swagger documentation 
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerSpec))



app.post('/recommendation', async (req, res) => {
    const recomendaciones = [];
        const { tipo1, data1, endpoint,tipo2,data2} = req.body;
        let recomendacion;
       
        if(tipo2 && data2){
            recomendacion=obtenerData(tipo1,data1,tipo2,data2)
            console.log(recomendacion)
        }
        else{
        if (endpoint==='estatico'){

        if (tipo1 === 'platoPrincipal') {
            recomendacion = obtenerRecomendacionPorPlatoPrincipal(data1);
        } else if (tipo1 === 'postre') {
            recomendacion = obtenerRecomendacionPorPostre(data1);
        } else if (tipo1 === 'bebida') {
            recomendacion = obtenerRecomendacionPorBebida(data1);
        } else {
            recomendacion = `Tipo de recomendación "${tipo1}" no válido.`;
        }
    }

       
    }

    recomendaciones.push(recomendacion);
  /* if(endpoint==="dinamico"){
            
        async const dataDinamic=()=> {
            try {
              const response = await axios.get('/user?ID=12345',{
            
              });
              console.log(response);
            } catch (error) {
              console.error(error);
            }
          }
    }*/

    res.json({ recomendaciones });
});

app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
