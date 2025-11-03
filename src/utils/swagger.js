const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

module.exports = (app) => {
  const spec = swaggerJsdoc({
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'CABAPRO Árbitros API',
        version: '1.0.0',
        description: 'API REST para funciones del árbitro (Express + SpringBoot)'
      }
    },
    apis: ['./src/routes/*.js']
  });

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(spec));
};