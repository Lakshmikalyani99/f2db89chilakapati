const mongoose = require("mongoose") 
const iphoneSchema = mongoose.Schema({ 
 model: String, 
 color: String, 
 price: Number 
}) 
 
module.exports = mongoose.model("Iphone", 
iphoneSchema) 