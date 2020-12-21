const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  date: { type: Date, required: true },
  customer_id: { type: Schema.Types.ObjectId, ref: "Customer" },
  customer_name: {
    type: [
      {
        first_name: { type: String },
        last_name: { type: String },
      },
    ],
  },
  shipping_address: {
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
  billing_address: {
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
  orders: [
    {
      type: [
        {
          product_id: { type: Schema.Types.ObjectId, ref: "Inventory" },
          product_name: { type: String },
          qty: { type: Number },
          cost: { type: Number },
        },
      ],
    },
  ],
});

module.exports = mongoose.model("Order", orderSchema);
