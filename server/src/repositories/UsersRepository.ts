import {EntityRepository,Repository} from 'typeorm';

import Users from '../models/Users';

@EntityRepository(Users)
class UsersRepository extends Repository<Users>{
  public async findByData(data:Date):Promise<Users | null>{
    const findUsers = await this.findOne({
      where:{data},
    });

    return findUsers || null;
  }
}

export default UsersRepository;