import { getRepository } from "typeorm";
import { Request, Response } from "express";

import Users from "../models/Users";
import {hash} from 'bcryptjs';

export default {
  async create(request: Request, response: Response) {
    const usersRepository = getRepository(Users);

    try {
      const {
        name,
        email,
        dataNasci,
        cidade,
        rg,
        cpf,
        senha,
        celular,
      } = request.body;

      const checkUserExists = await usersRepository.findOne({where:{email}});

      if(checkUserExists){
        throw new Error('Email address already used.');
      }
      const hashedPassword = await hash(senha,8);

      const user = usersRepository.create({
        name,
        email,
        dataNasci,
        cidade,
        rg,
        cpf,
        senha:hashedPassword,
        celular,
      });

      await usersRepository.save(user);
    
      return response.json(user);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  },

  async show(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const userRepository = getRepository(Users);

      const user = await userRepository.findOne(id);
     
      return response.json(user);
    } catch (error) {
      return response.status(404).json();
    }
  },

  async index(request: Request, response: Response) {
    const usersRepository = getRepository(Users);
    const users = await usersRepository.find();

    return response.json(users);
  },
};
