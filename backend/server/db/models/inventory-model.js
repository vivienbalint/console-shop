const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
  name: { type: String, required: true, index: true },
  main_category: { type: String, required: true, index: true },
  sub_category: { type: String, required: true, index: true },
  genre: { type: String, index: true },
  release_date: { type: Date },
  description: { type: String },
  image: [{ type: String }],
  metacritic_rating: { type: Number },
  on_stock: { type: Boolean, required: true, index: true },
  nr_on_stock: { type: Number, required: true },
  price: { type: Number, index: true },
  orders: [{ type: Schema.Types.ObjectId, ref: "Order" }],
});

module.exports = mongoose.model("Inventory", inventorySchema);
