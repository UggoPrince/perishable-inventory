import { Router } from 'express';
import tryCatch from '../utilities/tryCatch';
import addItemValidation from '../validations/item/add';
import getItemValidation from '../validations/item/get';
import ItemController from '../controllers/Item';

const router = Router();

// add an item
router.post('/:item/add', addItemValidation, tryCatch(ItemController.addItem));

// get an item
router.get('/:item/quantity', getItemValidation, tryCatch(ItemController.getItem));

export default router;
