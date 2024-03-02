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


function obtenerRecomendacionPorPlatoPrincipal(platoPrincipal) {
    const plato = obtenerPlatoPrincipal(platoPrincipal);
    if (!plato) {
        return 'Lo siento, no se encontró el plato principal especificado.';
    }
   // return `Para el plato principal "${plato.nombre}", te recomiendo el postre "${plato.postreRecomendado}" y la bebida "${plato.bebidaRecomendada}".`;
    return {postre:plato.postreRecomendado,plato:plato.nombre,bebida:plato.bebidaRecomendada}
}

function obtenerRecomendacionPorPostre(postre) {
    const postreEncontrado = obtenerPostre(postre);
    if (!postreEncontrado) {
        return 'Lo siento, no se encontró el postre especificado.';
    }  

    const platoPrincipal = database.platosPrincipales.find(plato => plato.postreRecomendado.toLowerCase() === postreEncontrado.nombre.toLowerCase());
    const bebida = database.bebidas.find(bebida => bebida.nombre.toLowerCase() === platoPrincipal.bebidaRecomendada.toLowerCase());

   // return `Para el postre "${postreEncontrado.nombre}", te recomiendo el plato principal "${platoPrincipal.nombre}" y la bebida "${bebida.nombre}".`;
    return {postre:postreEncontrado.nombre, plato:platoPrincipal.nombre, bebida:bebida.nombre}
}

function obtenerRecomendacionPorBebida(bebida) {
    const bebidaEncontrada = obtenerBebida(bebida);
    if (!bebidaEncontrada) {
        return 'Lo siento, no se encontró la bebida especificada.';
    }

    const platoPrincipal = database.platosPrincipales.find(plato => plato.bebidaRecomendada.toLowerCase() === bebidaEncontrada.nombre.toLowerCase());
    const postre = database.postres.find(postre => postre.nombre.toLowerCase() === platoPrincipal.postreRecomendado.toLowerCase());

    //return `Para la bebida "${bebidaEncontrada.nombre}", te recomiendo el plato principal "${platoPrincipal.nombre}" y el postre "${postre.nombre}".`;
    return {plato:platoPrincipal.nombre,bebida:bebidaEncontrada.nombre,postre:postre.nombre}
}
function obtenerData(type1,data1,type2,data2){
    if(type1==="platoPrincipal" && type2==="postre"){
    console.log(data1,data2)
    const platoprincipal=obtenerRecomendacionPorPlatoPrincipal(data1)
    const postre=obtenerRecomendacionPorPostre(data2)
   
    try{
    assert.deepStrictEqual(platoprincipal,postre)
        return {bebida:platoprincipal.bebida}
    }catch(error){
        return "los datos no coinciden con una respuesta"
    }

    }
    if(type1==="postre" && type2==="platoPrincipal"){
        
        const platoprincipal=obtenerRecomendacionPorPlatoPrincipal(data2)
        const postre=obtenerRecomendacionPorPostre(data1)
        console.log("postre",postre)
        assert.deepStrictEqual(platoprincipal,postre)
    
        
            console.log("same")
            return {bebida:platoprincipal.bebida}
    
        }
    if(type1==="platoPrincipal" && type2==="bebida"){
        
            const platoprincipal=obtenerRecomendacionPorPlatoPrincipal(data1)
            const bebida=obtenerRecomendacionPorBebida(data2)
            
            assert.deepStrictEqual(platoprincipal,bebida)
    
            return {postre:platoprincipal.postre}
        }
            
    if(type1==="bebida" && type2==="platoPrincipal"){
        
                const platoprincipal=obtenerRecomendacionPorPlatoPrincipal(data2)
                const bebida=obtenerRecomendacionPorPostre(data1)
                if(typeof(platoprincipal)===Object||typeof(bebida)===Object){
                    try{
                        assert.deepStrictEqual(platoprincipal,bebida)
                        return {bebida:platoprincipal.bebida}
                
                    }catch(error){
                        return "los datos no coinciden con una respuesta "
                    }

                }
             
                
    }

    if(type1==="postre" && type2==="bebida"){
        
            const bebida=obtenerRecomendacionPorBebida(data2)
            const postre=obtenerRecomendacionPorPostre(data1)
            console.log("postre",postre)
            assert.deepStrictEqual(postre,bebida)
            return {plato:bebida.plato}
            }
    if(type1 === "bebida" && type2==="postre"){
        
        const bebida=obtenerRecomendacionPorBebida(data1)
        const postre=obtenerRecomendacionPorPostre(data2)
        console.log("postre",postre)
        assert.deepStrictEqual(postre,bebida)       
        return {plato:bebida.plato}
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
