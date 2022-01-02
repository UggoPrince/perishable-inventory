import { Request, Response, NextFunction } from 'express';
import ItemService from '../services/ItemService';
import { failure } from '../utilities/response';

/**
 * ItemMiddleware class handles item middleware activities
 * @class ItemMiddleware
 */
export default class ItemMiddleware {
  /**
   * check if post exist
   * @method eventExist
   * @param {req} - request object
   * @param {res} - response object
   * @param {function} - next middleware function
   * @returns {object} Response
   */
  static async itemExist(req: Request, res: Response, next: NextFunction) {
    const {
      params: { item },
    } = req;
    const getItem = await ItemService.getItem(item);
    const { validTill } = getItem;
    if (!validTill) return failure(res, 404, 'Item not found or expired.');
    return next();
  }
}
