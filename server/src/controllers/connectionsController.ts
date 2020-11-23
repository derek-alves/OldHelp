import { getConnection, getRepository } from "typeorm";
import { Request, Response } from "express";
import Connection from "../models/Services_has_users";
import Services from "../models/Services";
import User from "../models/Users";
import { set } from "date-fns";

export default {
  async deleteUsersInConnections(request: Request, response: Response) {
    const { id } = request.user;

    const con = await getRepository(Connection)
      .createQueryBuilder("connection")
      .update()
      .set({ status: "aceito" }).where({user_id:id}).andWhere("service_id =:id",{id})
      .set({status:"rejeitado"}).where({service_id:id});

    return response.json({ message: "foi" });
  },
  async indexUsersConnections(request: Request, response: Response) {
    const { id } = request.user;

    const Users = await getRepository(Services).find({
      where: {
        user_id: id,
      },
      join: {
        alias: "services",
        leftJoinAndSelect: {
          ServicesHasUsers: "services.services",
          users: "ServicesHasUsers.user_has_service",
        },
      },
    });
    return response.json(Users);
  },
  async indexConnections(request: Request, response: Response) {
    const { id } = request.user;

    const connections = await getRepository(Connection)
      .createQueryBuilder("services_has_users")
      .where("services_has_users.user_id = :id", { id })
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
