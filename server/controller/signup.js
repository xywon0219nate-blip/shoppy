import bcrypt from 'bcrypt';
import * as repository from '../repository/signup.js';

export const getSignup = async(req, res, next) => {
   const { id, pwd, name, phone, emailDomain, emailName } = req.body;
   
   //1. 비밀번호 암호화
   const pwdHash = await bcrypt.hash(pwd, 10);

   //2. 각각 들어온 이메일 주소를 @로 붙이기
   const email = emailName.concat('@',emailDomain);
   const member = {...req.body, "pwdHash": pwdHash, "email": email};
   
   //3. 해당 데이터 repo 전달
   const result = await repository.getSignup(member);    
   res.json({"isSignup": result});
}