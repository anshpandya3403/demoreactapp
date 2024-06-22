const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));

const dbURI = 'mongodb+srv://anshpandya3403:hSpBwh08iGEuUDeL@messages.sfzxxpr.mongodb.net/?retryWrites=true&w=majority&appName=Messages';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Connected to database');
})




const Schema = mongoose.Schema;


const newMessage = new Schema({
    name:{type:String},
    email:{type:String},
    message:{type:String}
},{collection:'messages'});


const Message = mongoose.model('Message', newMessage);

const newProduct =  new Schema({
    _id:mongoose.Types.ObjectId,
    title:{type:String, required:true},
    price:{type:Number, required:true},
    description:{type:String, required:true},
    thumbnail:{type:String, required:true},
    category:{type:String, required:true},
    brand:{type:String},
    rating:{type:Number, required:true},
    reviews:[{
        rating:{type:Number, required:true},
        comment:{type:String, required:true},
        date:{type:Date, default:Date.now,required:true},
        reviewerName:{type:String, required:true},
        reviewerEmail:{type:String, required:true}
    }]
},{collection:'products'});

const Product = mongoose.model('Product', newProduct);


const LoginCredentials = new Schema({
    username:{type:String, required:[true,'please enter your username'],unique:[true,'username exists']},
    password:{type:String, required:[true,'please enter your password'],unique:false},
});

app.post('/api/messages', async (req, res) => {
    const {name,email,message} = req.body;
    const mess = new Message({name,email,message});
    try{
        const newMessage = await mess.save();
        res.status(201).json(newMessage);
        console.log(newMessage);
    }catch(err){
        res.status(400).json({message: err.message});
    }

},);

 app.get('/api/products',async (req,res)=>{
    try{
    const products = await Product.find({});
    res.status(200).json(products);
    }catch(e){
        res.status(500).json({message: e.message});
    }

 });

 app.get('/api/products/:_id',async (req,res)=>{
    try{
        
        const product = await Product.findById(req.params._id);
        console.log(req.params._id);
        console.log(product);
        if(!product){
        return res.status(404).json({message:"Product not found"});
         }
         res.status(200).json(product);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
 });



 app.post('/api/admin/products', async (req, res) => {
    try {
        const { title, price, description, thumbnail, category, brand, rating, reviews } = req.body;
        const newProduct = new mongoose.Types.ObjectId();
        const newProductData = {
            _id: newProduct,
            title,
            price,
            description,
            thumbnail,
            category,
            brand,
            rating,
            reviews,
        };

        const product = await Product.create(newProductData);
        res.status(201).json({ message: 'Product added successfully', product });
    } catch (error) {
        res.status(500).json({ message: 'Error adding product'});
    }
});


app.put('/api/admin/editproduct/:id', async (req, res) => {
    try {
        const { title, price, description, thumbnail, category, brand } = req.body;
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
            title,
            price,
            description,
            thumbnail,
            category,
            brand
        }, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error updating product' });
    }
});



app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});