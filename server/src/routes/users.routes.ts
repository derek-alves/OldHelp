import { parseISO } from "date-fns";
import { Router, Request, Response } from "express";
import { getCustomRepository } from "typeorm";

import UsersRepository from "../repositories/UsersRepository";
import CreateUsersService from "../services/CreateUsersService";


const usersRouter = Router();

usersRouter.get("/", (request: Request, response: Response) => {
  const usersRepository = getCustomRepository(UsersRepository);
  const users = usersRepository.find();

  return response.json(users);
});

usersRouter.post("/", async (request: Request, response: Response) => {
  try {
    const {
      name,
      email,
      data,
      dataNasci,
      cidade,
      rg,
      cpf,
      senha,
      celular,
    } = request.body;

    const parseDate = parseISO(data);

    const createUser = new CreateUsersService();

    const user = await createUser.execute({
      name,
      email,
      data: parseDate,
      dataNasci,
      cidade,
      rg,
      cpf,
      senha,
      celular,
    });

    return response.json(user);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default usersRouter;
