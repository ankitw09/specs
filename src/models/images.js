const mongoose = require("mongoose");
const validator = require("validator");

 const userSchema = mongoose.Schema({
     price: {
         type: Number,
         required: true
     },
     image: {
         type: String,
         required: true,
         minLength: 5
        
     }
 });

 //we need a collection

 const User = mongoose.model("image",userSchema);

 module.exports = User;