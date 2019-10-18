import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "../utils/resolvers";

const typeDefs = `
type Query {
  hello: String,
  greet(name:  String): String,
  users: [User]
  getUsers: [User]
}
type User {
  _id: ID
  firstName: String!
  lastName: String!
  age: Int!
}
input UserInput {
  age: Int!
  firstName: String!
  lastName: String!
}
type Mutation {
  addUserSample(input: UserInput): User
  addUser(input: UserInput): User
  updateUser(_id: ID, input: UserInput ) : User
  deleteUser(_id: ID) : User
}
`;

export default makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers
});
