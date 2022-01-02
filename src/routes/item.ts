import { Router } from 'express';
import tryCatch from '../utilities/tryCatch';
import addItemValidation from '../validations/item/add';
import getItemValidation from '../validations/item/get';
import ItemController from '../controllers/Item';
import sellItemValidation from '../validations/item/sell';
import ItemMiddleware from '../middlewares/ItemMiddleware';

const router = Router();

// add an item
router.post('/:item/add', addItemValidation, tryCatch(ItemController.addItem));

// get an item
router.get('/:item/quantity', getItemValidation, tryCatch(ItemController.getItem));

// sell an item
router.post(
  '/:item/sell',
  sellItemValidation,
  ItemMiddleware.itemExist,
  tryCatch(ItemController.sellItem),
);

export default router;
