const mongoose = require("mongoose");
const validator = require("validator");

 const userSchema = mongoose.Schema({
     name: {
         type: String,
         required: true,
         minLength: 3
     },
     email: {
         type: String,
         required: true,
         validate(value){
             if(!validator.isEmail(value)){
                 throw new Error("Invalid Email Id") 
             }
         }
     },
     subject: {
         type: String,
         required: true,
         minLength: 5
        
    },
     message: {
         type: String,
         required: true,
         minLength:20
     }  
 });


 //we need a collection

 const User = mongoose.model("contactus",userSchema);

 module.exports = User;