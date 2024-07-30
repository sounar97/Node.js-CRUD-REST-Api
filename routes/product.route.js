const express = require('express');
const Product=require('../models/product.model');
const router=express.Router();


router.get('/',async(req,res)=>{
    try{
        const product=await Product.find();
        res.status(200).json(product);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
})
