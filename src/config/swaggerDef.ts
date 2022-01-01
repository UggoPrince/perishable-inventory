import path from 'path';
import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
  openapi: '3.0.3',
  info: {
    title: 'Perishable Inventory API.', // Title of the documentation
    version: '1.0.0', // Version of the app
    description: 'This is the documentation of Perishable Inventory API.', // short description of the app
  },
  servers: [{ url: '/api/v1' }],
};
const dir = path.join(__dirname, '../../docs', '/');

const options = {
  swaggerDefinition,
  // path to the API docs
  apis: [`${dir}/**/*.yaml`],
};

// initialize swagger-jsdoc
export default swaggerJSDoc(options);
