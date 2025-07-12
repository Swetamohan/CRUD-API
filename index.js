import express from 'express';
import mongoose from 'mongoose';
import Product from './models/product.model.js';
import productRoute from './routes/product.route.js';

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use("/api/products", productRoute);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get('/', (req,res) =>{
    res.send("Hello from node API server updated yes");
});

mongoose.connect('your url to mongoDB')
  .then(() => console.log('Connected to DB!'))
  .catch(() => { console.log("Connection failed!"); });