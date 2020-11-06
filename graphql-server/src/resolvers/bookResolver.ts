import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { CreateUserInput } from "../inputs/CreateUserInput";
import UsersModel from "../models/Users";

@Resolver()
export class BookResolver {
  @Query(() => [UsersModel])
  users() {
    return UsersModel.find();
  }

  @Mutation(() => UsersModel)
  async createUser(@Arg("data") data: CreateUserInput) {
    const user = UsersModel.create(data);
    await user.save();
    return user;
  }
}
