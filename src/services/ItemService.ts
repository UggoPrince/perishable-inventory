/* eslint-disable no-param-reassign */
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
        [sequelize.fn('min', sequelize.col('expiry')), 'validTill'],
      ],
      where: { name, expiry: { [Op.gt]: Date.now() } },
    }).then((result: any) => {
      const [itemQE] = result;
      const { dataValues } = itemQE;
      return dataValues;
    });
    return item;
  }

  /**
   * sell item.
   * @async
   * @method sellItem
   * @param {number} quantity - quantity of item to be sold
   * @param {string} name - name of item
   * @returns {object} Response
   */
  static async sellItem(quantity: any, name: string) {
    const where = { name, expiry: { [Op.gt]: sequelize.fn('now') }, quantity: { [Op.gt]: 0 } };
    const items = await Item.findAll({ where }).then((result: any) => {
      if (result.length > 0) {
        for (let i = 0; i < result.length; i += 1) {
          const element = result[i];
          const q = parseInt(element.dataValues.quantity, 10);
          const { id } = element.dataValues;
          quantity = parseInt(quantity, 10);
          if (quantity === q) {
            element.decrement({ quantity: q }, { where: { id } });
            element.destroy();
            break;
          } else if (quantity > q) {
            element.decrement({ quantity: q }, { where: { id } });
            element.destroy();
            quantity -= q;
          } else if (quantity < q) {
            element.decrement({ quantity }, { where: { id } });
            break;
          }
        }
        return result;
      }
      return result;
    });
    return items;
  }
}
