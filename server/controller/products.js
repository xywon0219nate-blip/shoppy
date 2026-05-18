import * as repository from '../repository/products.js';

/**
 * 전체 상품 조회
 */
export const getAll = async(req, res, next) => {  
   const products = await repository.getAll();
   res.json(products);   // {"data": products}
}

/**
 * 상품 디테일 조회
 */
export const getProduct = async(req,res,next) => {
   const product = await repository.getProduct(req.params.pid);
   res.json(product);
}

/**
 * 상품 리뷰 조회
 */
export const getProductReview = async(req,res,next) => {
   // const review = await repository.getProductReview();
   res.json({});
   console.log('상품리뷰');
   
}

/**
 * 상품 QnA
 */

export const getQna = async(req,res,next) => {
   // console.log('controller-->', req.params.pid);
   const qna = await repository.getQna(req.params.pid);
   res.json(qna);
}