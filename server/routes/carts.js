import express from 'express';
import * as controller from '../controller/carts.js';

const router = express.Router();

router.post('/add', controller.getAdd);
router.post('/count', controller.getCount);

export default router;