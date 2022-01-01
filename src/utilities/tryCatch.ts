import { Request, Response } from 'express';
import { failure } from './response';
import logger from './logger';

export type fn = (req: Request, res: Response) => object;

export default (method: fn) => async (req: Request, res: Response) => {
  try {
    return await method(req, res);
  } catch (error: any) {
    logger.error(`${error.message}`, error);
    return failure(res, 503, 'Some error occurred');
  }
};
