import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import './Login.css';

const Login = () => {
   const navigate = useNavigate();
   const [formData, setFormData] = useState({
      email:"",
      password:"",
   });
   const handlechange=(e)=>{
      const{name, value}= e.target;
      setFormData((prevData)=>({
         ...prevData,
         [name]:value,
      }));
   }
   const handlesubmit=async(e)=>{
      e.preventDefault();
      console.log("from data here:", formData);
      // api end point
      const Api = 'http://localhost:3000/user/login';

      try{
         const response = await axios.post(Api, formData);
         console.log("Login Successfull!", response.data);
         Swal.fire({
            title:"Login Successfully!!!!",
            icon:"success"
         });
         navigate('/dashboard');
      }
      catch(error){
         if(error.response){
            console.error("Login Failed", error.response.data);
            Swal.fire({
                title:"Login Failed",
                text:"Invalid Credentials",
                icon:"error"
            });
         }
         else if(error.request){
            console.error("No response from server:", error.request);
         }
         else{
            console.error("Internal Server Error-", error.message);
         }
      }
   };
  return (
    <div className="form-div-2">
    <form className="login-form" onSubmit={handlesubmit}>
        <h1 className="heading2">Login Here...</h1>
        <input type="email" placeholder="Enter Your Email" name='email' value={formData.email} onChange={handlechange} />
        <input type="password" placeholder="Enter Password" name='password' value={formData.password} onChange={handlechange} />
        <button type="submit" className="loginbtn">Login</button>
    </form>
</div>
  );
};

export default Login;