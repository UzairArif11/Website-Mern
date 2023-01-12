import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../App";

const Login = () => {
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const LoginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/signIn", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    console.log(data);
    console.log(res);
    if (!data || res.status === 400) {
      window.alert("Invalid Credentials");
    } else {
      dispatch({ type: "USER", payload: true });
      window.alert("Login Successful");
      navigate("/");
    }
  };
  return (
    <>
      <div className="login-page ">
        <form method="POST" className="form ">
          <h2>Welcome</h2>
          <h6>Signin to your Account</h6>
          <input
            name="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <input
            name="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            type="password"
            id="password"
            placeholder="Password"
          />
          <button type="submit" onClick={LoginUser}>
            Login
          </button>
          <div>
            <h4>Donot have an Account</h4>
            <NavLink
              className="nav-link active"
              aria-current="page"
              to="/signup"
            >
              SignUp
            </NavLink>
          </div>
        </form>
      </div>
      <div className="empty"></div>
    </>
  );
};

export default Login;
