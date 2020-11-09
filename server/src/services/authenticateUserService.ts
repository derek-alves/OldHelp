import { getRepository } from "typeorm";
import {compare} from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import authConfig from '../config/auth';

import Users from '../models/Users';

interface Request {
  email:string;
  password:string;
}

interface Response{
  user:Users;
  token:string;
}


class AuthenticateUSerService{
  public async execute({email,password}:Request):Promise<Response>{
    const userRepository = getRepository(Users);

    const user = await userRepository.findOne({where:{email}});

    if(!user){
      throw new Error('Incorrect email/password combination.');
    }
    
     const passwordMatched = await compare(password,user.senha);
     
     if(!passwordMatched){
      throw new Error('Incorrect email/password combination.');
     }

    const { secret, expiresIn} = authConfig.jwt;

     const token = sign({},secret,{
       subject:String(user.id),
       expiresIn
     });

     return{
       user,
       token,
     }
  }
}

export default AuthenticateUSerService;