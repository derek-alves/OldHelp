import { getRepository } from "typeorm";
import { Request, Response } from "express";

import Services from "../models/Services";
import { hash } from "bcryptjs";

export default {
  async create(request: Request, response: Response) {
    const servicesRepository = getRepository(Services);

    try {
      const { title, description, price, date } = request.body;

      const { id } = request.user;

      const Status = "Aberto";

      const user = servicesRepository.create({
        title,
        description,
        price,
        status: Status,
        user_id:parseInt(id)
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
    const servicesRepository = getRepository(Services);
    const services = await servicesRepository.find();

    return response.json(services);
  },
};
