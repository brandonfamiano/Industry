const mongoose = require("mongoose");
const { Schema } = mongoose;

const TrendItemSchema = new Schema({
  name: String,
  price: Number,
  category: String,
  ingredients: Array,
  information: Array,
  image: String,
  review: Number,
});

const TrendModel = mongoose.model("TrendItem", TrendItemSchema);
module.exports = TrendModel;
