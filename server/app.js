import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

//const PORT = 9000
const PORT = process.env.SERVER_PORT;
const app = express();

//미들웨어 --> 공통작업 정의
app.use(cors());
app.use(express.json());

//라우터 --> 클라이언트 요청 처리 (직접처리)
// app.get('/test',(req,res,next) => {});

//라우터 --> 클라이언트 요청 처리 (컨트롤러에 분배)
// app.use('/test', 컨트롤러함수명);

app.listen(PORT, () => {
   console.log(`서버 실행 중 ✅ :: ${PORT}`);
});