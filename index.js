const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const app = express();
const productRoute = require('./routes/product.route.js');
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//routes
app.use('/api/products', productRoute);
app.get('/', (req, res) => {
    res.send('Hello from node api server');
});

mongoose.connect("")
    .then(() => {
        console.log('Connected to database')
        app.listen(3000, () => {
            console.log('Server is running on port 3000')
        })
    })
    .catch((err) => { console.log('Error connecting to database') });