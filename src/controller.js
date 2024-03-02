import {
  obtenerRecomendacionPorPlatoPrincipal,
  obtenerRecomendacionPorPostre,
  obtenerRecomendacionPorBebida
} from "./model.js";

function getRecommendation(tipo, input, endpoint) {
  let recomendacion;

  if (endpoint === 'estatico') {
    if (tipo === 'platoPrincipal') {
      recomendacion = obtenerRecomendacionPorPlatoPrincipal(input);
    } else if (tipo === 'postre') {
      recomendacion = obtenerRecomendacionPorPostre(input);
    } else if (tipo === 'bebida') {
      recomendacion = obtenerRecomendacionPorBebida(input);
    } else {
      recomendacion = `Tipo de recomendación "${tipo}" no válido.`;
    }
  }
  /* elif(endpoint==="dinamico"){
       
       async const dataDinamic=()=> {
           try {
             const response = await axios.post('/user?ID=12345',{
           
             });
             console.log(response);
           } catch (error) {
             console.error(error);
           }
         }
   }*/

  return recomendacion;
}

export {
  getRecommendation
};
