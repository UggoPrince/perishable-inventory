import { Op } from 'sequelize';
import { Item, sequelize } from '../database/models';

/**
 * ItemService class handles item database activities
 * @class ItemService
 */
export default class ItemService {
  /**
   * creates a new item.
   * @async
   * @method createItem
   * @param {object} body - all fields needed for the item
   * @returns {object} Response
   */
  static createItem(body: any) {
    const item = Item.create(body);
    return item;
  }

  /**
   * get item.
   * @async
   * @method getItem
   * @param {string} name - name of the item
   * @returns {object} Response
   */
  static getItem(name: string) {
    const item = Item.findAll({
      attributes: [
        [sequelize.fn('sum', sequelize.col('quantity')), 'quantity'],
        [sequelize.fn('max', sequelize.col('expiry')), 'validTill'],
      ],
      where: { name, expiry: { [Op.gt]: Date.now() } },
    }).then((result: any) => {
      const [itemQE] = result;
      const { dataValues } = itemQE;
      return dataValues;
    });
    return item;
  }
}
