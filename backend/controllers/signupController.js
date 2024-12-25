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
// Login Api
const loginUser = async (req, res)=>{
    try{
        const {email,password}=req.body;
        // check if the user exist
        const user = await SignupData.findOne({email});
        if(!user){
            return res.status(404).json({message:"User not Found"});
        }
        if(user.password !== password){
            return res.status(404).json({message:"Invalid Crendtial"});
        }
        res.status(200).json({message:"Login Successfull",User: user});
    }catch(error){
        console.error("error during login", error);
        res.status(500).json({message:"Internal Server Error"});
    }
};
module.exports = { signupUser, loginUser};