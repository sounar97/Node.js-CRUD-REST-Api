const express=require('express');
const mongoose=require('mongoose');
const Product=require('./models/product.model.js');
const app=express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello from node api server');
});


app.post('/api/products',async(req,res)=>{
    try{
         const product= await Product.create(req.body);
         res.status(200).json(product);
    }catch(error){
        res.status(500).send({message:error.message})
    }
});
app.get('/api/products',async(req,res)=>{
    try{
            const product=await Product.find();
            res.status(200).json(product);
    }
    catch(error){
      res.status(500).send({message:error.message});
    }
});

app.get('/api/products/:id',async(req,res)=>{
    try{
        const product=await Product.findById(req.params.id);
        res.status(200).json(product);
    }
    catch(error){
        res.status(500).send({message:error.message});
    }
});

mongoose.connect("mongodb+srv://sounar345:uum5oJb3D5M0fDfD@backend.vb4j5t4.mongodb.net/?retryWrites=true&w=majority&appName=Backend")
.then(()=>{
    console.log('Connected to database')
    app.listen(3000,()=>{
    console.log('Server is running on port 3000')})})
.catch((err)=>{console.log('Error connecting to database')});