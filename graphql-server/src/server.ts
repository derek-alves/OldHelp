import "reflect-metadata";
import { ApolloServer } from "apollo-server";

import "./database";
import { buildSchema } from "type-graphql";
import { BookResolver } from "./resolvers/bookResolver";

const main = async () => {
  const schema = await buildSchema({
    resolvers: [BookResolver],
  });

  const server = new ApolloServer({ schema });
  await server.listen(4000);
  console.log("server has started");
};

main();