const mongoose = require("mongoose") 
const iphoneSchema = mongoose.Schema({ 
 model: {
    type:String,
    required:true
 }, 
 color: {
    type:String,
    required:true
 }, 
 price: {
    type:Number,
    required:true,
    min:0,
    max:10000
 } 
}) 
 
module.exports = mongoose.model("Iphone", 
iphoneSchema) 