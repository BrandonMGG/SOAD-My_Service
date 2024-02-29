import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi  from 'swagger-ui-express'

const swaggerDefinition={
    openapi:'',
    info:{
        title:'My app',
        version:"1.0.0",
        description:"api to recommendation"
    },

}

const options={
    swaggerDefinition,
    apis:['localhost:3000/recommendation']//path to the api

}

const swaggerSpec=swaggerJSDoc(options)



export default swaggerSpec