import { getConnection, getRepository, getManager } from "typeorm";
import { Request, Response } from "express";
import Connection from "../models/Services_has_users";
import Services from "../models/Services";
import User from "../models/Users";
import { set } from "date-fns";

export default {
  async deleteUsersInConnections(request: Request, response: Response) {
    // const { id } = request.user;
      const id = 2;
       getRepository(Connection)
      .createQueryBuilder("connection")
      .update()
      .set({ status: "aceito" })
      .where({ user_id: id })
      .andWhere("service_id =:id", { id })
      .set({ status: "rejeitado" })
      .where({ service_id: id });

    return response.json({ message: "foi" });
  },

  async indexUsersConnections(request: Request, response: Response) {
    const { id } = request.user;

    const entityManager = getManager();
    const query = await entityManager.query(`select  svc.title , u."name" from services svc 
      join "ServicesHasUsers" shu
      on shu.service_id = svc.id 
      join users u 
      on u.id = shu.user_id 
      where svc.user_id = ${id};`);
    // const Users = await getRepository(Services).find({
    //   where: {
    //     user_id: id,
    //   },
    //   join: {
    //     alias: "services",
    //     leftJoinAndSelect: {
    //       ServicesHasUsers: "services.services",
    //       users: "ServicesHasUsers.user_has_service",
    //     },
    //   },
    // });
    return response.send(query);
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
