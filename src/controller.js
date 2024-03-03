import {
  obtenerRecomendacionPorPlatoPrincipal,
  obtenerRecomendacionPorPostre,
  obtenerRecomendacionPorBebida,
  obtenerData
} from "./model.js";
import dataIA from "../OpenAI.js";
import { response } from "express";

function getRecommendation(tipo1, data1, endpoint,tipo2,data2,res) {
        
        let recomendacion;
        if(endpoint==="estatico"){
          if(tipo2 && data2){
              recomendacion=obtenerData(tipo1,data1,tipo2,data2,res)
              
          }
          else{
          if (endpoint==='estatico'){

          if (tipo1 === 'platoPrincipal') {
            res.status(200)
             const {postre,bebida}=obtenerRecomendacionPorPlatoPrincipal(data1,res);
            
             postre||bebida? recomendacion={postre,bebida}: recomendacion={error:"Lo siento, no se encontró el plato especificado.", status:404}
          } else if (tipo1 === 'postre') {
            res.status(200)
              const {plato,bebida} = obtenerRecomendacionPorPostre(data1,res);
              plato||bebida? recomendacion={plato,bebida}:recomendacion={error:"Lo siento, no se encontró el postre especificado.", status:404}
          } else if (tipo1 === 'bebida') {
            res.status(200)
              const {plato, postre} = obtenerRecomendacionPorBebida(data1,res);
              recomendacion={plato,postre}
              plato||postre? recomendacion={plato,postre}:recomendacion={error:"Lo siento, no se encontró el bebida especificado.", status:404}
          } else {
              res.status(400)
              recomendacion = {error: `no se encontro el tipo ${tipo1}`, status:400};

          }
      }

        
    }
  }

  if(endpoint==="dinamico"){
       
       async function dataDinamic(){
           try {
             const response = await axios.post('/user?ID=12345',{
           
             });
             console.log(response);
           } catch (error) {
             console.error(error);
           }
         }
   }
   if(endpoint==="IA"){
    if(tipo1==="platoPrincipal")

    dataIA(`dame una recomendacion de bebida y de postre si mi plato principal es  ${tipo1} devuelveme la informacion en un json`).then(
      (recomendacion=>{ 
        recomendacion=JSON.parse(recomendacion)
      }
        )
               ).catch(error=> error)
   }
  console.log(recomendacion)
  return recomendacion;
  }

export {
  getRecommendation
};
