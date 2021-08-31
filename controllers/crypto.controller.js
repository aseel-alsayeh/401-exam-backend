'use strict'
const axios = require('axios');
const userModel= require('../models/crypto.model')

const home = async(req,res)=>{
res.send("hello there")
}

const getDatafromApi= async(req,res)=>{
const responseApi = await axios.get('https://crypto-explorer.herokuapp.com/crypto-list/')
res.send(responseApi.data)
}

const getFavCrypto=async(req,res)=>{
const email=req.query.email;
userModel.find({email:email},(error,data)=>{
    res.send(data)
})

}

const addFavCrypto= async(req,res)=>{
    const {
        email,
        title,
            description,
            toUSD,
            image_url,
        
    } =req.body

        const favCrypto = new userModel({
            email:email,
            crypto:[{
                title:title,
                description:description,
                toUSD:toUSD,
                image_url:image_url
            }]
        })
        favCrypto.save()
        res.send(favCrypto)
    }




const deleteFavCrypto=(req,res)=>{
    userModel.deleteOne({_id:req.params.id},(error,data)=>{
        if(error){
            res.send(error)
        }
        userModel.find({},(error,data)=>{
            res.send(data)
        })
    })

}

const updateFavCrypto=(req,res)=>{
    const { title,
        description,
        image_url,} =req.body
        userModel.findOne({},(error,data)=>{
            if (error){
                res.send(error)
            }
            data.crypto[0].title=title;
            data.crypto[0].description=description;
            data.crypto[0].image_url=image_url;
            data.save()
            res.send(data)
        })

}

module.exports = { home,
    getDatafromApi , 
    getFavCrypto,
    addFavCrypto,
    deleteFavCrypto,
    updateFavCrypto


}


