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