const mongoose = require('mongoose');
const {Schema} = mongoose;

const MenuItemSchema = new Schema({
    name: String,
    category: String,
    price: Number,
    description: String,
    photo: String,
})

const MenuModel = mongoose.model('MenuItem', MenuItemSchema);
module.exports = MenuModel;
