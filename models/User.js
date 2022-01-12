const mongoose = require("mongoose");
//const Schema = mongoose.Schema; ES15 destructuring in line below
const { Schema } = mongoose;

const userSchema = new Schema({
  googleID: String,
  firstName: String,
  lastName: String,
  email: String,
  credits: { type: Number, default: 0 },
});

mongoose.model("users", userSchema);
