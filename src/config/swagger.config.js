const swaggerJsDoc = require('swagger-jsdoc')

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'BukaAnime - Admin Library API',
      version: '1.0.0',
      description: 'Admin API Documentation',
    },
  },
  apis: [
    './src/routes/*.js',
    './src/routes/**/*.js',
  ],
}

module.exports = swaggerJsDoc(swaggerOptions)

