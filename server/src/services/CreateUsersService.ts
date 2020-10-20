import { startOfHour } from 'date-fns';
import { getCustomRepository} from 'typeorm';

import Users from '../models/Users';
import UsersRepository from '../repositories/UsersRepository';

interface Request{
 
  name: string;
  email: string;
  data: Date;
  dataNasci: Date;
  cidade: string;
  rg: string;
  cpf: string;
  senha: string;
  celular: number;
}

class CreateUsersService{
  public async execute({name,email,data,dataNasci,cidade,rg,cpf,senha,celular}:Request):Promise<Users>{

    const usersRepository = getCustomRepository(UsersRepository)
    const usersDate = startOfHour(data);

    const findUserInSameDate = usersRepository.findByData(
      usersDate,
    );

    if(findUserInSameDate){
      throw Error('this users is already booked');
    }

    const user = usersRepository.create({
      name,
      email,
      data:usersDate,
      dataNasci,
      cidade,
      rg,
      cpf,
      senha,
      celular
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUsersService;