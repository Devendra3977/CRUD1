const SignupData = require('../models/signupModel');

const signupUser = async(req, res)=>{
    try{
        const{firstName, lastName, email, password, gender, hobbies, mobile, city, dob, address} = req.body;
        // create a new user
        const user = new SignupData({firstName, lastName, email, password, gender, hobbies, mobile, city, dob, address});
        await user.save();
        res.status(201).json({message:"User Signed Up Successfully!!!", user:user});
    }
    catch(error){
        console.error(error);
        res.status(500).json({message:"Internal Server errorr"});
    }
};
module.exports = { signupUser };