const mongoose = require('mongoose');
const {Schema} = mongoose;

const TrendItemSchema = new Schema({
    name: String,
    price: Number,
    food: Boolean,
    description: String,
    photo: String,
})

const TrendModel = mongoose.model('TrendItem', TrendItemSchema);
module.exports = TrendModel;