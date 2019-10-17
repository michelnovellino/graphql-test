import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "../utils/resolvers";

const typeDefs = `
type Query {
  hello: String,
  greet(name:  String): String,
  users: [User]
}
type User {
  _id: ID
  name: String!
  last_name: String
}
input UserInput {
  number: Int
  name: String!
  last_name: String
}
type Mutation {
  addUser(input: UserInput): User
}
`;

export default makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers
});
