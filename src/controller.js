import {
  obtenerRecomendacionPorPlatoPrincipal,
  obtenerRecomendacionPorPostre,
  obtenerRecomendacionPorBebida,
  obtenerData
} from "./model.js";

function getRecommendation(tipo1, data1, endpoint,tipo2,data2) {

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
