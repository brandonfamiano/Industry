const mongoose = require('mongoose');
const {Schema} = mongoose;

const TrendItemSchema = new Schema({
    name: String,
    price: Number,
    description: String,
    photo: String,
})