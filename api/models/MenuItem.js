const mongoose = require('mongoose');
const {Schema} = mongoose;

const MenuItemSchema = new Schema({
    name: String,
    category: String,
    price: Number,
    description: String,
    photo: String,
})