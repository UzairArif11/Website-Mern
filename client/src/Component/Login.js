import React from "react";
import { NavLink } from "react-router-dom";


const Login = () => {
  return <>
<div className="login-page " >
  <form className="form ">
    <h2>Welcome</h2>
    <h6>Signin to your Account</h6>
    <input type="email" placeholder="Email" />
    <input type="password" id="password" placeholder="Password"/>
    <button type="submit">Login</button>
    <div>
      <h4>Donot have an Account</h4>
      <NavLink className="nav-link active" aria-current="page" to="/signup">SignUp</NavLink>
    </div>
  </form>
</div>
<div className="empty">

</div>
  
  </>;
};

export default Login;
