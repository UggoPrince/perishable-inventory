import { Response } from 'express';
import logger from './logger';

/**
 * returns an error message to the client
 * @param {object} res HTTP response object
 * @param {number} status HTTP status code
 * @param {object|string} message Error message as an object/text
 * @returns {object} response
 */
export const failure = (
  res: Response,
  status = 503,
  message: object | string = 'An error occurred',
): Response<object, Record<string, unknown>> => {
  const errorObject = {
    status,
    message,
  };
  logger.error(errorObject);
  return res.status(status).send(errorObject);
};

/**
 * returns an success message to the client
 * @param {object} res HTTP response object
 * @param {number} status HTTP status code
 * @param {string} message message as an object/text
 * @returns {object} response
 */
export const success = (res: Response, status = 200, message = 'Success', data = {}): object => {
  const successObject = {
    status,
    message,
    data,
  };
  logger.info(message, data);
  return res.status(status).send(successObject);
};
