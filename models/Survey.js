const mongoose = require("mongoose");
const { Schema } = mongoose;
const RecipientSchema = require("./Recipient");

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [RecipientSchema], //this tells mongoose that this is an array of strings(recipientSchema)
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  _user: { type: Schema.Types.ObjectId, ref: "User" }, //make mongoose understand that it is associated with a user - by convention _user means reference
  dateSent: Date,
  lastResponded: Date,
});

mongoose.model("surveys", surveySchema);
