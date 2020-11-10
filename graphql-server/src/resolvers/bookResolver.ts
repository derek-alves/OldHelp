import { Resolver, Query, Mutation, Arg } from "type-graphql";

import { CreateUserInput } from "../inputs/CreateUserInput";
import UsersModel from "../models/Users";
import Teste from '../models/Teste';
import { TesteInput } from "../inputs/CreateTesteInput";

@Resolver()
export class BookResolver {
  @Query(() => [Teste])
  teste() {
    return Teste.find();
  }

  @Mutation(() => Teste)
  async creatTeste(@Arg("data") data: TesteInput) {
    const teste = Teste.create(data);
    await teste.save()
    return teste;
  }
}
