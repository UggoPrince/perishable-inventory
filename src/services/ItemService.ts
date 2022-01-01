import Item from '../database/models';

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
}
