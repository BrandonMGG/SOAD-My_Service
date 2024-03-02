import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'Recommendation API',
			version: '1.0.0',
			description: 'API to get recommendation for a dish, dessert or drink based on the input provided.',
		},
		servers: [
			{
				url: `http://localhost:3000/`
			}
		]
	},
	apis: ['./src/routes/health-check.js'] // Path to the API Routes
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export default swaggerSpec;