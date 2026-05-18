import express from 'express';
import * as controller from '../controller/products.js';

const router = express.Router();

router.get('/', controller.getAll); // 전체 상품 조회
router.get('/:pid', controller.getProduct); // 상품 디테일 조회
// router.get('/:pid, 새로운 라이터 호출); //   /qna/:pid, /review.;pid
router.get('/review', controller.getProductReview);
router.get('/qna/:pid', controller.getQna);

export default router;