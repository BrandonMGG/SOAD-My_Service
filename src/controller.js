import {
  obtenerRecomendacionPorPlatoPrincipal,
  obtenerRecomendacionPorPostre,
  obtenerRecomendacionPorBebida,
  obtenerData
} from "./model.js";
import dataIA from "../OpenAI.js";
import axios from "axios";
import { response } from "express";
async function getIA(data1) {
  try {
    const recomendacion = await dataIA(`dame una recomendacion de bebida y de postre si mi plato principal es ${data1} devuelveme la informacion en un json`);
    return JSON.parse(recomendacion);
  } catch (error) {
    console.error("Error en la solicitud a la IA:", error);
    return { error: "Error en la solicitud a la IA", status: 500 };
  }
}
/*async function handlerIA(data1){ 
  try{
    
 const recomendacion=await getIA(data1)
  return recomendacion

  }catch(error){
    console.log(error)
  }
}*/
async function getRecommendation(tipo1, data1, endpoint, tipo2, data2, res) {

  let recomendacion;
  if (tipo1 === "platoPrincipal" || tipo1 === "postre" || tipo1 === "bebida") {
    if (endpoint === "estatico" || endpoint === "dinamico" || endpoint === "IA") {

      if (endpoint === "estatico") {
        if (tipo2 && data2) {
          recomendacion = obtenerData(tipo1, data1, tipo2, data2, res)
        }
        else {
          if (endpoint === 'estatico') {

            if (tipo1 === 'platoPrincipal') {
              res.status(200)
              const { postre, bebida } = obtenerRecomendacionPorPlatoPrincipal(data1, res);

              postre || bebida ? recomendacion = { postre, bebida } : recomendacion = { error: "Lo siento, no se encontró la plato especificado.", status: 404 }
            } else if (tipo1 === 'postre') {
              res.status(200)
              const { plato, bebida } = obtenerRecomendacionPorPostre(data1, res);
              plato || bebida ? recomendacion = { plato, bebida } : recomendacion = { error: "Lo siento, no se encontró la postre especificado.", status: 404 }
            } else if (tipo1 === 'bebida') {
              res.status(200)
              const { plato, postre } = obtenerRecomendacionPorBebida(data1, res);
              recomendacion = { plato, postre }
              plato || postre ? recomendacion = { plato, postre } : recomendacion = { error: "Lo siento, no se encontró la bebida especificado.", status: 404 }
            } else {
              res.status(400)
              recomendacion = { error: `no se encontro el tipo ${tipo1}`, status: 400 };

            }
          }


        }
      }

      if (endpoint === "dinamico") {
        console.log("dinamico")

        async function dataDinamic1() {
          if (tipo1 === "platoPrincipal") {
            tipo1 = "MainCourse"
          }
          if (tipo1 === "bebida") {
            tipo1 = "Drink"
          }
          if (tipo1 === "postre") {
            tipo1 = "Dessert"
          }
          try {
            const response = await axios.get(`http://soadproyecto1.eastus.azurecontainer.io:44319/api/Meal?SourceType=Local&MealName1=${data1}&CourseType1=${tipo1}`);
            if (tipo1 === "MainCourse") {

              const Drink = response.data.data.RecommendedMeals[0].Name
              const Dessert = response.data.data.RecommendedMeals[1].Name

              const data = {
                "bebida": Drink,
                "postre": Dessert
              }
              return data


            }
            if (tipo1 === "Dressert") {

              const CourseType = response.data.data.RecommendedMeals[0].Name
              const Drink = response.data.data.RecommendedMeals[1].Name

              const data = {
                "bebida": Drink,
                "plato": CourseType
              }
              return data

            }

            if (tipo1 === "Drink") {

              const CourseType = response.data.data.RecommendedMeals[0].Name
              const Dessert = response.data.data.RecommendedMeals[1].Name

              const data = {
                "plato": CourseType,
                "postre": Dessert
              }
              return data

            }

          }
          catch (error) {
            console.error(error);
          }
        }
        async function dataDinamic2(tipo1, data1, tipo2, data2) {

          if (tipo1 === "bebida") {
            tipo1 = "Drink"
          }
          if (tipo1 === "postre") {
            tipo1 = "Dessert"
          }
          if (tipo2 === "platoPrincipal") {
            tipo2 = "MainCourse"
          }
          if (tipo2 === "bebida") {
            tipo2 = "Drink"
          }
          if (tipo2 === "postre") {
            tipo2 = "Dessert"
          }
          try {

            const response = await axios.get(`http://soadproyecto1.eastus.azurecontainer.io:44319/api/Meal?SourceType=Local&MealName1=${data1}&CourseType1=${tipo1}&MealName1=${data2}&CourseType1=${tipo2}`);
            if (tipo1 === "MainCourse" && tipo2 === 'Dessert') {

              const Drink = response.data.data.RecommendedMeals[0].Name

              const data = {
                "bebida": Drink
              }
              return data


            }
            if (tipo1 === "Dessert" && tipo2 == "MainCourse") {


              const Drink = response.data.data.RecommendedMeals[0].Name

              const data = {
                "bebida": Drink
              }
              return data

            }

            if (tipo1 === "Drink" && tipo2 === "Dessert") {

              const CourseType = response.data.data.RecommendedMeals[0].Name

              const data = {
                "plato": CourseType
              }
              return data

            }
            if (tipo1 === "Dessert" && tipo2 === "Drink") {

              const plato = response.data.data.RecommendedMeals[0].Name

              const data = {
                "plato": plato
              }
              return data

            }

            if (tipo1 === "Drink" && tipo2 === "MainCourse") {

              const Dressert = response.data.data.RecommendedMeals[0].Name

              const data = {
                "Dressert": Dressert
              }
              return data

            }
            if (tipo1 === "MainCourse" && tipo2 === "Drink") {

              const Dressert = response.data.data.RecommendedMeals[0].Name

              const data = {
                "Dressert": Dressert
              }
              return data

            }


          }
          catch (error) {
            console.error(error);
          }

        }

        if (tipo1 && tipo2) {
          console.log("dos")
         recomendacion = dataDinamic2(tipo1, data1, tipo2, data2)
        }
        else {
          console.log("1")
          recomendacion = dataDinamic1()
        }


      }

      if (endpoint === "IA") {
        if (tipo1 === "platoPrincipal") {
          recomendacion = getIA(data1)

        }
      }

      console.log("recomendacionnnn", recomendacion)
      return recomendacion;
    }
    else{
      console.log("error")
      return recomendacion = { error: "el tipo de dato no se encuentra ", status: 400 }
    }
  }
  else {
    console.log("error")
    return recomendacion = { error: "el tipo de dato no se encuentra ", status: 400 }
  }
}



export {
  getRecommendation
};
