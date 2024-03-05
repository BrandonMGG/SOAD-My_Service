import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Recommendation API',
      version: '1.0.0',
      description: 'API to get recommendations for a dish, dessert or drink based on the input provided.',
    },
    host: 'https://soad-my-service.onrender.com/',
    paths: {
      '/health-check': {
        get: {
          tags: ['HealthCheck'],
          summary: 'Verifica el estado del servicio',
          description: 'Permite verificar si el servicio se encuentra en ejecución.',
          responses: {
            200: {
              description: 'El servicio está en ejecución.'
            }
          }
        }
      },
      /**
 * @swagger
 * /recommendation:
 *  post:
 *    tags:
 *      - Recommendations
 *    summary: Obtener recomendaciones de comida
 *    description: Permite obtener recomendaciones de comida basado en el input del usuario.
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: array
 *            items:
 *              type: object
 *              properties:
 *                tipo: 
 *                  type: string
 *                input: 
 *                  type: string
 *                endpoint: 
 *                  type: string
 *    responses:
 *      '200':
 *         description: Successfully retrieved recommendations for the given input.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                recomendaciones:
 *                  type: array
 *                  items:
 *                    type: string
 */
      '/recommendation': {
        post: {
          tags: ['Recommendation'],
          summary: 'Obtener recomendaciones de comida',
          description: 'Permite obtener recomendaciones de comida basado en el input del usuario.',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    tipo1: {
                      type: 'string',
                      description: 'Tipo de comida para el cual se desea obtener la recomendación.',
                      enum: ['platoPrincipal', 'postre', 'bebida']
                    },
                    data1: {
                      type: 'string',
                      description: 'Nombre del plato principal, postre o bebida para el cual se desea obtener la recomendación.'
                    },
                    tipo2: {
                      type: 'string',
                      description: 'Tipo de comida para el cual se desea obtener la segunda recomendación. Debe ser diferente al tipo1.',
                      enum: ['platoPrincipal', 'postre', 'bebida']
                    },
                    data2: {
                      type: 'string',
                      description: 'Nombre del plato principal, postre o bebida para el cual se desea obtener la segunda recomendación.'
                    },
                    endpoint: {
                      type: 'string',
                      description: 'Tipo de endpoint al cual se desea realizar la solicitud. *Estático* permite obtener una recomendación de la base de datos local. *Dinámico* permite obtener una recomendación de la base de datos remota. *IA* permite obtener una recomendación utilizando inteligencia artificial.',
                      enum: ['estatico', 'dinamico', 'IA']
                    }
                  },
                  required: ['tipo1', 'data1', 'endpoint']
                }
              }
            }
          },
          responses: {
            200: {
              description: 'Se obtuvo una recomendación exitosamente.',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      recomendacion: {
                        type: 'object',
                        properties: {
                          plato: {
                            type: 'string',
                            description: 'Nombre del plato principal recomendado.'
                          },
                          postre: {
                            type: 'string',
                            description: 'Nombre del postre recomendado.'
                          },
                          bebida: {
                            type: 'string',
                            description: 'Nombre de la bebida recomendada.'
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            404: {
              description: 'Error en la solicitud. No se logró obtener una recomendación en base a los datos de entrada.'
            },
            500: {
              description: 'Error en la solicitud. No se logró obtener una recomendación debido a un error interno.'
            }
          }
        }
      }
    }
  },
  apis: ['./src/routes/*.js'], // Path to the API Routes
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export default swaggerSpec;