import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

const Logout = () => {
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("/logOut", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        dispatch({ type: "USER", payload: false });
        navigate("/", { replace: true });
        if (!res.status === 200) {
          throw new Error(res.error);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <div>Done Logout</div>;
};

export default Logout;
