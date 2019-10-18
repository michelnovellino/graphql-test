import mongoose from "mongoose";

export async function initConnection() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mongo-graphql", {
      useNewUrlParser: true
    });
  } catch (error) {
    console.log(`error >>> ${error}`);
  }
}
