const express=require('express');
const mongoose=require('mongoose');
const app=express();



app.get('/',(req,res)=>{
    res.send('Hello from node api server');
});

mongoose.connect("mongodb+srv://sounar345:uum5oJb3D5M0fDfD@backend.vb4j5t4.mongodb.net/?retryWrites=true&w=majority&appName=Backend")
.then(()=>{console.log('Connected to database')
app.listen(3000,()=>{console.log('Server is running on port 3000')})})
.catch((err)=>{console.log('Error connecting to database')});