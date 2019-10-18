import { Schema, model } from "mongoose";
let User;
const Model = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  }
});

export default User = model("User", Model);
