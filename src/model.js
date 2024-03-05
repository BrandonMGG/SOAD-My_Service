import fs from 'fs';
import assert from 'assert';

const database = JSON.parse(fs.readFileSync('./database.json'));

function obtenerPlatoPrincipal(nombre) {
    return database.platosPrincipales.find(plato => plato.nombre.toLowerCase() === nombre.toLowerCase());
}

function obtenerPostre(nombre) {
    return database.postres.find(postre => postre.nombre.toLowerCase() === nombre.toLowerCase());
}

function obtenerBebida(nombre) {
    return database.bebidas.find(bebida => bebida.nombre.toLowerCase() === nombre.toLowerCase());
}


function obtenerRecomendacionPorPlatoPrincipal(platoPrincipal,res) {
    const plato = obtenerPlatoPrincipal(platoPrincipal,res);
    if (!plato) {
      res.status(404)
      console.log("lo siento")
        return 'Lo siento, no se encontró el plato principal especificado.';
    }
   // return `Para el plato principal "${plato.nombre}", te recomiendo el postre "${plato.postreRecomendado}" y la bebida "${plato.bebidaRecomendada}".`;
    return {postre:plato.postreRecomendado,plato:plato.nombre,bebida:plato.bebidaRecomendada}
}

function obtenerRecomendacionPorPostre(postre,res) {
    const postreEncontrado = obtenerPostre(postre);
    if (!postreEncontrado) {
        res.status(404)
        return 'Lo siento, no se encontró el postre especificado.';
    }  

    const platoPrincipal = database.platosPrincipales.find(plato => plato.postreRecomendado.toLowerCase() === postreEncontrado.nombre.toLowerCase());
    const bebida = database.bebidas.find(bebida => bebida.nombre.toLowerCase() === platoPrincipal.bebidaRecomendada.toLowerCase());

   // return `Para el postre "${postreEncontrado.nombre}", te recomiendo el plato principal "${platoPrincipal.nombre}" y la bebida "${bebida.nombre}".`;
    return {postre:postreEncontrado.nombre, plato:platoPrincipal.nombre, bebida:bebida.nombre}
}

function obtenerRecomendacionPorBebida(bebida,res) {
    const bebidaEncontrada = obtenerBebida(bebida);
    if (!bebidaEncontrada) {
      res.status(404)

        return 'Lo siento, no se encontró la bebida especificada.';
    }

    const platoPrincipal = database.platosPrincipales.find(plato => plato.bebidaRecomendada.toLowerCase() === bebidaEncontrada.nombre.toLowerCase());
    const postre = database.postres.find(postre => postre.nombre.toLowerCase() === platoPrincipal.postreRecomendado.toLowerCase());

    //return `Para la bebida "${bebidaEncontrada.nombre}", te recomiendo el plato principal "${platoPrincipal.nombre}" y el postre "${postre.nombre}".`;
    return {plato:platoPrincipal.nombre,bebida:bebidaEncontrada.nombre,postre:postre.nombre}
}
function obtenerData(type1,data1,type2,data2,res){
    if(type1==="platoPrincipal" && type2==="postre"){
    console.log(data1,data2)
    const platoprincipal=obtenerRecomendacionPorPlatoPrincipal(data1,res)
    const postre=obtenerRecomendacionPorPostre(data2)
   
    try{
    assert.deepStrictEqual(platoprincipal,postre)
        return {bebida:platoprincipal.bebida}
    }catch{
        res.status(404)
        return { error:`los datos no coinciden con una respuesta`,status:404}
    }

    }
    if(type1==="postre" && type2==="platoPrincipal"){
        
        const platoprincipal=obtenerRecomendacionPorPlatoPrincipal(data2,res)
        const postre=obtenerRecomendacionPorPostre(data1,res)
        console.log("postre",postre)
        assert.deepStrictEqual(platoprincipal,postre)
    
        try{
            console.log("same")
            return {bebida:platoprincipal.bebida}
    
        }catch{
          res.status(404)
          return { error:`los datos no coinciden con una respuesta`,status:404}
        }
      }
    if(type1==="platoPrincipal" && type2==="bebida"){
        
            const platoprincipal=obtenerRecomendacionPorPlatoPrincipal(data1,res)
            const bebida=obtenerRecomendacionPorBebida(data2,res)
            try{
            assert.deepStrictEqual(platoprincipal,bebida)
    
            return {postre:platoprincipal.postre}
          }
          catch{
            res.status(404)
            return { error:`los datos no coinciden con una respuesta`,status:404}
          }
        }
            
    if(type1==="bebida" && type2==="platoPrincipal"){
        
                const platoprincipal=obtenerRecomendacionPorPlatoPrincipal(data2,res)
                const bebida=obtenerRecomendacionPorPostre(data1,res)
                if(typeof(platoprincipal)===Object||typeof(bebida)===Object){
                    try{
                        assert.deepStrictEqual(platoprincipal,bebida)
                        return {bebida:platoprincipal.bebida}
                
                    }catch{
                      res.status(404)
                        return { error:`los datos no coinciden con una respuesta`,status:404}
                    }

                }
             
                
    }

    if(type1==="postre" && type2==="bebida"){
        
            const bebida=obtenerRecomendacionPorBebida(data2)
            const postre=obtenerRecomendacionPorPostre(data1)
            console.log("postre",postre)
            try{
            assert.deepStrictEqual(postre,bebida)
            return {plato:bebida.plato}
          }
          catch { 
            return { error:`los datos no coinciden con una respuesta`,status:404}
                }
            }
    if(type1 === "bebida" && type2==="postre"){
        
        const bebida=obtenerRecomendacionPorBebida(data1)
        const postre=obtenerRecomendacionPorPostre(data2)
      try{
        assert.deepStrictEqual(postre,bebida)       
        return {plato:bebida.plato}}
        catch{
          res.status(404)
          return { error:`los datos no coinciden con una respuesta`,status:404}
        }
    }
    else{
      res.status(404)
      return { error:`los datos no coinciden con una respuesta`,status:404}
    }

}

export {
  obtenerPlatoPrincipal,
  obtenerPostre,
  obtenerBebida,
  obtenerRecomendacionPorPlatoPrincipal,
  obtenerRecomendacionPorPostre,
  obtenerRecomendacionPorBebida,
  obtenerData
};
