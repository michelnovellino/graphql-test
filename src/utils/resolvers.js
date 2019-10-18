import { userSample } from "../models/sample.model";
import User from "../models/user.model";
export const resolvers = {
  Query: {
    hello: () => {
      return "hello";
    },
    greet: (root, args, ctx) => {
      console.log(ctx);
      console.log(args.name);
      return `hello ${args.name}`;
    },
    users: () => {
      return userSample;
    },

    getUsers: async () => {
      return await User.find();
    }
  },
  Mutation: {
    addUserSample: (_, { input }) => {
      input.id = userSample.length;
      console.log(input);
      userSample.push(input);
      return null;
    },
    addUser: async (_, { input }) => {
      const newUser = new User(input);
      await newUser.save();
      console.log(newUser);
      return newUser;
    },
    updateUser: async (_, { _id, input }) => {
      return User.findByIdAndUpdate(_id, input, { new: true });
    },
    deleteUser: async (_, { _id }) => {
      return await User.findByIdAndDelete(_id);
    }
  }
};
