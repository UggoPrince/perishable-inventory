import dotenv from 'dotenv';
import app from '..';
import logger from '../utilities/logger';

dotenv.config();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  logger.info(`App is now listening!`);
});
