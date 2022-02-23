const mongoose = require('mongoose') 
const itemSchema = mongoose.Schema({
    image:String,
    title:String,
    description:String,
},{ timestamps: true })
const Item = mongoose.model('Item',itemSchema);
module.exports=Item;
