import { Router } from 'express';
import tryCatch from '../utilities/tryCatch';
import addValidation from '../validations/item/add';
import ItemController from '../controllers/Item';

const router = Router();
router.post('/:item/add', addValidation, tryCatch(ItemController.addItem));

export default router;
