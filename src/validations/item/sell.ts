import { Request, Response, NextFunction } from 'express';
import { validate } from 'validate.js';
import { failure } from '../../utilities/response';
import { textRule, numberRule } from '../rules';

export default (req: Request, res: Response, next: NextFunction) => {
  const { body, params } = req;
  const allFields = { ...params, ...body };
  const constraints = {
    ...textRule('item'),
    ...numberRule('quantity'),
  };
  const validationError = validate(allFields, constraints);
  if (validationError) return failure(res, 422, validationError);
  return next();
};
