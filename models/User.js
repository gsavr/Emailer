const mongoose = require("mongoose");
//const Schema = mongoose.Schema; ES15 destructuring in line below
const { Schema } = mongoose;

const userSchema = new Schema({
  googleID: String,
  name: String,
  email: String,
});

mongoose.model("users", userSchema);
