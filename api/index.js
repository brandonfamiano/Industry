const express = require('express');
const app = express();
const mongoose = require('mongoose')
const MenuItem = require('./models/MenuItem.js')
const TrendItem = require('./models/TrendItem.js')
const imageDownloader = require('image-downloader');


app.use(express.json());

mongoose.connect('mongodb+srv://admin:<admin>@cluster0.5yklaxo.mongodb.net/?retryWrites=true&w=majority');


app.post('/add'), (req,res) => {
    const{name,category,price,description,photo} = req.body;
    MenuItem.create({
        name,
        category,
        price,
        description,
        photo,
    })
}

app.post('/upload-by-link', async (req,res) => {
    const {link} = req.body;
    const NewName = Date.now() + '.jpg';
    await imageDownloader.image({
        url: link,
        dest: __dirname+'/uploads' +NewName,
    });
    res.json(__dirname+'/uploads' +NewName,);
})