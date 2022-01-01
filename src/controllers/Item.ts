import { Request, Response } from 'express';
import ItemService from '../services/ItemService';
import { success } from '../utilities/response';

/**
 * User class handles operations on the user entity
 * @class User
 */
export default class Item {
  /**
   * This method adds a new item
   * @async
   * @method addItem
   * @param {object} req request object
   * @param {object} res response object
   * @param {object} response
   */
  static async addItem(req: Request, res: Response) {
    const { params, body } = req;
    const { item } = params;
    const { expiry, quantity } = body;
    const now = Date.now();
    const future = now + parseInt(expiry, 10);
    const data = { item, quantity, expiry: future };
    ItemService.createItem(data);
    return success(res, 201, 'Item successfully added.', {});
  }
}
