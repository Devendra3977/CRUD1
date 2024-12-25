import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import './Signup.css';

const Signup = () => {
   const navigate = useNavigate();
   const [formData, setFormData] = useState({
      firstName:"",
      lastName:"",
      email:"",
      password:"",
      gender:"",
      hobbies:"",
      mobile:"",
      city:"",
      dob:"",
      address:"",
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
      const Api = 'http://localhost:3000/user/signup';

      try{
         const response = await axios.post(Api, formData);
         console.log("Signup Successfull!", response.data);
         Swal.fire({
            title:"Registerd Successfully!!!!",
            icon:"success"
         });
         naviagate('/login');
      }
      catch(error){
         if(error.response){
            console.error("Signup Failed", error.response.data);
            Swal.fire({
               title:"Signup Failed",
               text:"Please Fill All Fields",
               icon:"warning",
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
   <div className="form-div">
      <h1 className="heading1">Signup Here...</h1>
   <form className="signup-form" onSubmit={handlesubmit}>
       <div className="form-row">
           <div className="form-column">
               <input type="text" placeholder="Enter First Name" name='firstName' value={formData.firstName} onChange={handlechange} />
               <input type="text" placeholder="Enter Last Name" name='lastName' value={formData.lastName} onChange={handlechange} />
               <input type="text" placeholder="Enter Your Email" name='email' value={formData.email} onChange={handlechange} />
               <input type="text" placeholder="Create Password" name='password' value={formData.password} onChange={handlechange} />
               <input type="text" placeholder="Enter Your Gender" name='gender' value={formData.gender} onChange={handlechange} />
           </div>
           <div className="form-column">
               <input type="text" placeholder="Enter Your Hobbies" name='hobbies' value={formData.hobbies} onChange={handlechange} />
               <input type="text" placeholder="Enter Your Mobile Number" name='mobile' value={formData.mobile} onChange={handlechange} />
               <input type="text" placeholder="Enter Your City" name='city' value={formData.city} onChange={handlechange} />
               <input type="text" placeholder="Enter Your DOB" name='dob' value={formData.dob} onChange={handlechange} />
               <textarea placeholder="Enter Your Address" name='address' value={formData.address} onChange={handlechange}></textarea>
           </div>
       </div>
       <button type="submit" className="signupbtn">Submit</button>
   </form>
</div>
  );
};

export default Signup;