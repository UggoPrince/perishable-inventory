/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
import { Sequelize, QueryTypes } from 'sequelize';
import dotenv from 'dotenv';
import logger from '../../utilities/logger';
import itemModel from './item';
import {
  tableExistQuery,
  createDbFuncQuery,
  triggerExistQuery,
  createTriggerQuery,
} from '../../utilities/queries';

dotenv.config();
const myLogger = (msg: unknown) => {
  logger.info(msg);
};

const env: string = process.env.NODE_ENV || 'development';
const config = require('../../config/database')[env];

const sequelize = config.url
  ? new Sequelize(config.url, config)
  : new Sequelize(config.database, config.username, config.password, {
      ...config,
      logging: myLogger,
    });

const Item = itemModel(sequelize);

/**
 * this code block will create a function and trigger that will
 * clear expired records from the database
 */

logger.info(
  'Create a function (or replace) and trigger that will clear expired records from the database',
);
sequelize // checks if the items table exist
  .query(tableExistQuery, { type: QueryTypes.SELECT })
  .then((result) => {
    if (result.length > 0) {
      // create or replace the delete expired records function
      sequelize.query(createDbFuncQuery, { type: QueryTypes.INSERT });
      sequelize // check if the trigger exists
        .query(triggerExistQuery, {
          type: QueryTypes.SELECT,
        })
        .then((result2) => {
          if (result2.length < 1) {
            // If trigger does not exist create one
            sequelize.query(createTriggerQuery);
          }
        });
    }
  });
export { Item, sequelize };
