const mongoose = require("mongoose");
const signupSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true,
    },
    hobbies:{
        type:String,
        required:true,
    },
    mobile:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    dob:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
});
const SignupData = mongoose.model('SignupData', signupSchema);
module.exports = SignupData;