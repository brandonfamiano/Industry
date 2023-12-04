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


app.get('/trend/:id', async (req,res)=>{
    const{id} = req.params;
    try{
        const trendItem = await TrendItem.findOne({_id:id})
        res.json(trendItem)
    }catch (error){
        res.status(500).json({error:'Internal Server Error'});
    }
})

app.post('/menu', async(req,res) => {
    try{
    const{name,category,price,description,photo} = req.body;
    const menuDoc = await MenuItem.create({
        name,
        category,
        price,
        description,
        photo,
    });
    res.json(menuDoc);
    } catch (error) {
        console.error('error adding menu item', error);
        res.status(500).json({error:'Internal Server Error'})
    }
    
})
app.post('/trends', async(req,res) => {
    try{
    const{name,price,food,description,photo} = req.body;
    const trendDoc = await TrendItem.create({
        name,
        price,
        food,
        description,
        photo,
    });
    res.json(trendDoc);
    } catch (error) {
        console.error('error adding trend item', error);
        res.status(500).json({error:'Internal Server Error'})
    }
    
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

app.get('/menu', async(req, res) => {
    try{
        const menuItem = await MenuItem.find();
        if (!menuItem){
            return res.status(404).json({error: 'No Menu Found'});
        }
        res.json(menuItem);
    }
    
    catch(error){
        res.status(500).json({error: 'internal server error'});
    }
    
})
app.get('/trends/food', async(req, res) => {
    try{
        // only category: food
        const trendItem = await TrendItem.find({category: 'food'});
        if (!trendItem){
            return res.status(404).json({error: 'No Trends Found'});
        }
        res.json(trendItem);
    }
    
    catch(error){
        res.status(500).json({error: 'internal server error'});
    }
})

app.get('/trends/drink', async(req, res) => {
    try{
        const trendItem = await TrendItem.find({category: 'drink'});
        if (!trendItem){
            return res.status(404).json({error: 'No Trends Found'});
        }
        res.json(trendItem);
    }
    
    catch(error){
        res.status(500).json({error: 'internal server error'});
    }
})



app.listen(4000,() => {
    console.log(`Server is running`);
  });