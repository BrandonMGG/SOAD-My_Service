// function getSwaggerDocs(app) {
//   app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
// }

// function getSwaggerDocsJSON(app) {
//   app.get('/api-docs/json', (req, res) => {
//     res.json(swaggerSpec);
//   });
// }

function initRoutes(app) {
  healthCheck(app);
  // app.post('/recommendation', async (req, res) => {
  //   const recomendaciones = [];
  //   const requests = req.body;

  //   for (const request of requests) {
  //     const { tipo, input, endpoint } = request;
  //     let recomendacion;
  //     if (endpoint === 'estatico') {

  //       if (tipo === 'platoPrincipal') {
  //         recomendacion = obtenerRecomendacionPorPlatoPrincipal(input);
  //       } else if (tipo === 'postre') {
  //         recomendacion = obtenerRecomendacionPorPostre(input);
  //       } else if (tipo === 'bebida') {
  //         recomendacion = obtenerRecomendacionPorBebida(input);
  //       } else {
  //         recomendacion = `Tipo de recomendación "${tipo}" no válido.`;
  //       }
  //     }

  //     recomendaciones.push(recomendacion);
  //   }
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

  //   res.json({ recomendaciones });
  // });
}

export { initRoutes };