'use strict'
const express = require('express');
const cors = require('cors');
const app= express();
app.use(cors());
app.use(express.json());
const axios = require('axios');
require('dotenv').config();
const mongoose=require('mongoose')
const PORT=process.env.PORT
mongoose.connect('mongodb://127.0.0.1:27017/401exam',
{ useNewUrlParser: true ,useUnifiedTopology: true})

const { home,
    getDatafromApi , 
    getFavCrypto,
    addFavCrypto,
    deleteFavCrypto,
    updateFavCrypto

} = require ("./controllers/crypto.controller") 
// do not forget

app.get('/', home )
app.get('/get', getDatafromApi)
app.get('/fav', getFavCrypto)
app.post('/create', addFavCrypto)
app.put('/update/:id',updateFavCrypto)
app.delete('/delete/:id', deleteFavCrypto)


app.listen(PORT , ()=>{
    console.log(`listiening to port ${PORT}`)
})