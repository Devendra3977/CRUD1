import React from "react";

const Signup = () => {
  return (
     <div className="form-div">
        <form>
            <h1>Signup Here...</h1>
            <input type="text" placeholder="Enter First Name"/><br></br>
            <input type="text" placeholder="Enter Last Name"/><br></br>
            <input type="text" placeholder="Enter Your Email"/><br></br>
            <input type="text" placeholder="Create Password"/><br></br>
            <input type="text" placeholder="Enetr Your Gender"/><br></br>
            <input type="text" placeholder="Enter Your Hobbies"/><br></br>
            <input type="text" placeholder="Enter Your Mobile Number"/><br></br>
            <input type="text" placeholder="Enter Your City"/><br></br>
            <input type="text" placeholder="Enter Your DOB"/><br></br>
            <textarea placeholder="Enter Your Address"></textarea><br></br>
            <button type="submit">Submit</button>
        </form>
     </div>
  );
};

export default Signup;