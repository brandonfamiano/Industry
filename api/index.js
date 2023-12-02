const express = require('express');
const app = express();
const mongoose = require('mongoose')
const MenuItem = require('./models/MenuItem.js')
const TrendItem = require('./models/TrendItem.js')
const imageDownloader = require('image-downloader');
const cors = require('cors');

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://admin:admin@cluster0.5yklaxo.mongodb.net/?retryWrites=true&w=majority');


app.get('/test', (req,res) =>{
    res.json('test')
})

app.post('/menu', (req,res) => {
    const{name,category,price,description,photo} = req.body;
    const menuDoc = MenuItem.create({
        name,
        category,
        price,
        description,
        photo,
    })
    res.json(menuDoc);
})

app.post('/upload-by-link', async (req,res) => {
    const {link} = req.body;
    const NewName = Date.now() + '.jpg';
    await imageDownloader.image({
        url: link,
        dest: __dirname+'/uploads' +NewName,
    });
    res.json(__dirname+'/uploads' +NewName,);
})

app.get('/menu', async (req, res) => {
    res.json(MenuItem.find);
})
app.get('/trends', async (req, res) => {
    res.json(TrendItem.find);
})

app.listen(4000);