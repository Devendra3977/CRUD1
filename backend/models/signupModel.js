const mongoose = require("mongoose");
const signupSchema = new mongoose.Schema({
    firstName:{
        type:String,
        require:true,
    },
    lastName:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    gender:{
        type:String,
        require:true,
    },
    hobbies:{
        type:String,
        require:true,
    },
    mobile:{
        type:String,
        require:true,
    },
    city:{
        type:String,
        require:true,
    },
    dob:{
        type:String,
        require:true,
    },
    address:{
        type:String,
        require:true,
    },
});
const SignupData = mongoose.model('SignupData', signupSchema);
module.exports = SignupData;