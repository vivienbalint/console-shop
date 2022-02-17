const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
  name: { type: String, required: true },
  main_category: { type: String, required: true },
  sub_category: { type: String, required: true },
  genre: { type: String },
  release_date: { type: Date },
  description: { type: String },
  image: [{ type: String }],
  metacritic_rating: { type: Number },
  on_stock: { type: Boolean, required: true },
  nr_on_stock: { type: Number, required: true },
  price: { type: Number },
  orders: [{ type: Schema.Types.ObjectId, ref: "Order" }],
});

module.exports = mongoose.model("Inventory", inventorySchema);
