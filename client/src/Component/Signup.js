import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const navigate = useNavigate();
  const [user, setuser ]=useState({name:"",email:"",phone:"",work:"",password:"",cpassword:""})
  let name,value;
  const handelinput=(e) =>{
    name=e.target.name;
    value=e.target.value;
    setuser({...user,[name]:value})
  }
  const postdata=async(e)=>{
    e.preventDefault();
    const {name ,email ,phone ,work ,password ,cpassword}= user;
    const res= await fetch("/register",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({name, email, phone, work, password, cpassword })
    });
    
    const data = await res.json();
   console.log(data);
    if(data.status===422){
      window.alert("Invalid Registration");
      console.log("Invalid Registration")
    }
    else{
      window.alert("Registration Successfull");
      console.log("Registration Successfull")
      navigate.push("/login");
    }
  }
  return <>
<div className="login-page">
  <form method="POST" className="form">
    <h2>Welcome</h2>
    <h6>Create new Account</h6>
    <input type="text" placeholder="Your Name"  name="name" value={user.name} onChange={handelinput}/>
    <input type="email" placeholder="Your Email"  name="email" value={user.email} onChange={handelinput}/>
    <input type="number" placeholder="Mobile Number"  name="phone" value={user.phone} onChange={handelinput}/>
    <input type="text" placeholder="Your Profession" name="work" value={user.work} onChange={handelinput} />
    <input type="password" id="password" placeholder="Password" name="password" value={user.password} onChange={handelinput}/>
    <input type="cpassword" id="cpassword" placeholder="Conform Password" name="cpassword" value={user.cpassword} onChange={handelinput}/>
    <button type="submit" onClick={postdata}>Signup</button>
    <div>
      <h4>Already Have an Account</h4>
      <NavLink className="nav-link active" aria-current="page" to="/login">Login</NavLink>
    </div>
  </form>
</div>
  
  </>;
};


export default SignUp;
