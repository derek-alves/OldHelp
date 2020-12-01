import { getConnection, getRepository, getManager } from "typeorm";
import { Request, Response } from "express";
import Connection from "../models/Services_has_users";

export default {

  async deleteUsersInConnections1(request: Request, response: Response) {
    const {service} = request.query;
  
    getRepository(Connection)
    .createQueryBuilder("connection")
    .update()
    .set({status:'Rejeitado'})
    .where("service_id = :sId",{sId:service})
    .execute();

  return response.json({ message: "foi" });
},
  async deleteUsersInConnections2(request: Request, response: Response) {
      const {service,user} = request.query;
    
      getRepository(Connection)
      .createQueryBuilder("connection")
      .update()
      .set({ status: "Aceito" })
      .where({ user_id: user })
      .andWhere("service_id = :id", {id:service})
      .execute();
      
    return response.json({ message: "foi" });
  },

  async indexUsersConnections(request: Request, response: Response) {
    const { id } = request.user;
    const {status} = request.query;
    const entityManager = getManager();

    const queryR = `select  svc.title , u."name" from services svc 
    join "ServicesHasUsers" shu
    on shu.service_id = svc.id 
    join users u 
    on u.id = shu.user_id
    where (u.id = ${id})
    and (shu.status = '${status}');`
  
    const queryDefault = `select svc.id ,svc.title , u."name", u.id user_id from services svc 
    join "ServicesHasUsers" shu
    on shu.service_id = svc.id 
    join users u 
    on u.id = shu.user_id 
    where (svc.user_id = ${id})
    and(shu.status = '${status}');`

    if(status === 'Rejeitado'){
      const query = await entityManager.query(queryR);
      return response.send(query);
    }else{
      const query = await entityManager.query(queryDefault);
      return response.send(query);
    }
  },
  async indexConnections(request: Request, response: Response) {
    const { id } = request.user;

    const connections = await getRepository(Connection)
      .createQueryBuilder("services_has_users")
      .where("services_has_users.user_id = :id", { id:3 })
      .orderBy("id", "DESC")
      .getMany();

    return response.json(connections);
  },


  async connection(request: Request, response: Response) {
    const connectionRepository = getRepository(Connection);

    try {
      const { idU } = request.params;

      const { id } = request.user;
      console.log(id);
      const status = "Pendente";

      const connection = connectionRepository.create({
        status,
        user_id: parseInt(id),
        service_id: parseInt(idU),
      });

      await connectionRepository.save(connection);

      return response.json(connection);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  },
};
