import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

const pool = mysql.createPool({
   host: process.env.DB_HOST || 'localhost',
   user: process.env.DB_USER || 'root', 
   password: process.env.DB_PASSWORD , //password의 경우 공개가 되면 큰일이 날 수 있기에 추가적으로 작성하지 않음.
   database: process.env.DB_NAME || 'shoppy'
});

//DB connect test
pool.getConnection()
.then(conn => console.log('✅ mysql 연결 성공'))
.catch((err) => console.log('❌ mysql 연결 실패'));

export default pool;
