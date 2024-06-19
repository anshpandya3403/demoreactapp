const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

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
});

const Message = mongoose.model('Message', newMessage);

// const newReview =  new Schema({
//     productId:{type:String},
//     name:{type:String},
//     email:{type:String},
//     message:{type:String},
//     rating:{type:Number}
// });

// const Review = mongoose.model('Review', newReview);

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

});



app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});