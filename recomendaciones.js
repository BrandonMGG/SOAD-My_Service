import fs from 'fs'
const database=JSON.parse(fs.readFileSync("./databasePrueba.json"))
function obtenerRecomendacion(tipo, input) {
  switch (tipo) {
    case 'platoPrincipal':
      return obtenerRecomendacionPorPlatoPrincipal(input);
    case 'postre':
      return obtenerRecomendacionPorPostre(input);
    case 'bebida':
      return obtenerRecomendacionPorBebida(input);
    default:
      return 'Tipo de recomendación no válido';
  }
}

function obtenerRecomendacionPorPlatoPrincipal(platoPrincipal) {
  const plato = database.platosPrincipales.find(item => item.nombre.toLowerCase() === platoPrincipal.toLowerCase());
  if (!plato) {
    return 'Lo siento, no se encontró el plato principal especificado.';
  }
  return `Para el plato principal "${plato.nombre}", te recomiendo el postre "${plato.postreRecomendado}" y la bebida "${plato.bebidaRecomendada}".`;
}

function obtenerRecomendacionPorPostre(postre) {
  const encontrado = database.postres.find(item => item.nombre.toLowerCase() === postre.toLowerCase());
  return encontrado ? `El postre "${encontrado.nombre}" es una excelente elección. Descripción: ${encontrado.descripcion}` : 'No se encontró el postre especificado.';
}

function obtenerRecomendacionPorBebida(bebida) {
  const encontrado = database.bebidas.find(item => item.nombre.toLowerCase() === bebida.toLowerCase());
  return encontrado ? `La bebida "${encontrado.nombre}" es muy refrescante. Descripción: ${encontrado.descripcion}` : 'No se encontró la bebida especificada.';
}

export default  obtenerRecomendacion
