import { Request, Response, NextFunction } from 'express';
import { validate } from 'validate.js';
import { failure } from '../../utilities/response';
import { textRule } from '../rules';

export default (req: Request, res: Response, next: NextFunction) => {
  const { params } = req;
  const constraints = {
    ...textRule('item'),
  };
  const validationError = validate(params, constraints);
  if (validationError) return failure(res, 422, validationError);
  return next();
};
