/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();

const { env } = process;
module.exports = {
  development: {
    username: env.DEV_DB_USER,
    password: env.DEV_DB_PASSWORD,
    database: env.DEV_DB,
    host: env.DEV_DB_HOST,
    dialect: 'postgres',
  },
  test: {
    username: env.TEST_DB_USER,
    password: env.TEST_DB_PASSWORD,
    database: env.TEST_DB,
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  production: {
    username: env.PROD_DB_USER,
    password: env.PROD_DB_PASSWORD,
    database: env.PROD_DB,
    host: env.PROD_DB_HOST,
    dialect: 'postgres',
  },
};
