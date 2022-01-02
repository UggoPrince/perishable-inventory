import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';
import routes from './routes';
import swaggerSpec from './config/swaggerDef';
import { getApiUrl, isEnvProd } from './utilities/getEnvs';

const app: Express = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Perishable Inventory API');
});

if (!isEnvProd()) {
  app.get('/api/v1', (req: Request, res: Response) => {
    res.send(
      `Welcome to TBH API version 2. <br/>  
      <a href="${getApiUrl}/api/v1/docs/#/">Documentation</a>`,
    );
  });

  app.get('/api-docs.json', (req: Request, res: Response) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });

  app.use(`/api/v1/docs`, swaggerUI.serve, swaggerUI.setup(swaggerSpec));
} else {
  app.get(`/api/v1`, (req: Request, res: Response) => {
    res.send(`Welcome to Perishable Inventory API version 1.`);
  });
}

app.use('/api/v1', routes);

app.use('*', (req: Request, res: Response) =>
  res.status(404).json({
    status: 404,
    message: 'No endpoint matches that URL',
  }),
);

export default app;
