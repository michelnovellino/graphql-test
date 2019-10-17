import { users } from "../models/sample.model";

export const resolvers = {
  Query: {
    hello: () => {
      return "hello";
    },
    greet: (root, args) => {
      console.log(args.name);
      return `hello ${args.name}`;
    },
    users: () => {
      return users;
    }
  },
  Mutation: {
    addUser: (_, { input }) => {
      console.log(input);
      return null;
    }
  }
};
