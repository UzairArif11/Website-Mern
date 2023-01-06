import React from "react";
import { NavLink } from "react-router-dom";


const SignUp = () => {
  return <>
<div className="login-page">
  <form className="form">
    <h2>Welcome</h2>
    <h6>Create new Account</h6>
    <input type="text" placeholder="Your Name" />
    <input type="email" placeholder="Your Email" />
    <input type="number" placeholder="Mobile Number" />
    <input type="text" placeholder="Your Profession" />
    <input type="password" id="password" placeholder="Password"/>
    <input type="cpassword" id="cpassword" placeholder="Conform Password"/>
    <button type="submit">Signup</button>
    <div>
      <h4>Already Have an Account</h4>
      <NavLink className="nav-link active" aria-current="page" to="/login">Login</NavLink>
    </div>
  </form>
</div>
  
  </>;
};


export default SignUp;
