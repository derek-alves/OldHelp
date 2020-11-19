import { getRepository } from "typeorm";
import { Request, Response } from "express";

import Services from "../models/Services";
import Connection from "../models/Services_has_users";

export default {
  // async IndexConnections(request: Request, response: Response) {
  //   console.log("ola");
  //   const { id } = request.user;
    
  //   const connections = await getRepository(Connection)
  //     .createQueryBuilder("services_has_users")
  //     .where("services_has_users.id = :id", { id })
  //     .orderBy("id", "DESC")
  //     .getMany();

  //   return response.json(connections);
  // },
  // async Connection(request: Request, response: Response) {
  //   const connectionRepository = getRepository(Connection);

  //   try {
  //     const { idU } = request.params;

  //     const { id } = request.user;
  //     console.log(id);
  //     const status = "Pendente";

  //     const connection = connectionRepository.create({
  //       status,
  //       user_id: parseInt(id),
  //       service_id: parseInt(idU),
  //     });

  //     await connectionRepository.save(connection);

  //     return response.json(connection);
  //   } catch (err) {
  //     return response.status(400).json({ error: err.message });
  //   }
  // },
  async create(request: Request, response: Response) {
    const servicesRepository = getRepository(Services);

    try {
      const { title, description, price } = request.body;

      const { id } = request.user;

      const Status = "Aberto";

      const user = servicesRepository.create({
        title,
        description,
        price,
        status: Status,
        user_id: parseInt(id),
      });

      await servicesRepository.save(user);

      return response.json(user);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  },

  async show(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const serviceRepository = getRepository(Services);

      const service = await serviceRepository.findOne(id);

      return response.json(service);
    } catch (error) {
      return response.status(404).json();
    }
  },

  async index(request: Request, response: Response) {
    const services = await getRepository(Services)
      .createQueryBuilder("services")
      .orderBy("id", "DESC")
      .getMany();
    // const services = await servicesRepository.find();

    return response.json(services);
  },
};
