import express, { Express, Request, Response } from 'express';
import cors from 'cors';

const app: Express = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Perishable Inventory API');
});

app.use('*', (req: Request, res: Response) =>
  res.status(404).json({
    status: 404,
    message: 'No endpoint matches that URL',
  }),
);

export default app;
