'use strict'
const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema({
    title:String,
    description:String,
    toUSD:String,
    image_url:String
})

const userSchema = new mongoose.Schema({
    email:String,
    crypto:[cryptoSchema],
})

const userModel = mongoose.model('userModeel', userSchema)

// const cryptoSeed=()=>{
//     {
//         const cryptoseed={

//             email:"v.salvatore7.gs@gmail.com",
//            title:"new fav",
//            description:"anth",
//            toUSD:"2",
//            image_url:""
//     }
//         }
//         cryptoseed.save() 
//  }
//  cryptoSeed()

module.exports =  userModel 