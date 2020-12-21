const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  name: {
    type: [
      {
        first_name: { type: String, required: true },
        last_name: { type: String, required: true },
      },
    ],
  },
  gender: { type: String, required: true },
  date_of_birth: { type: Date, required: true },
  address: {
    type: [
      {
        country: { type: String },
        zip_code: { type: Number },
        city: { type: String },
        street_name: { type: String },
        misc: { type: String },
      },
    ],
  },
  email: { type: String },
  password: { type: String },
  googleId: { type: String },
  facebookId: { type: String },
  orders: [{ type: Schema.Types.ObjectId, ref: "Order" }],
});

module.exports = mongoose.model("Customer", customerSchema);
