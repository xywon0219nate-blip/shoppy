import pool from '../DB/connection.js';

export const getRouter = async() => {
   const sql = `select   rid,
		title,
         description,
         list
   from product_return`;
   const [rows] = await pool.execute(sql,[]);
   return rows[0];
}