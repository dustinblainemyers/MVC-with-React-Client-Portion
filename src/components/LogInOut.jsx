import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import "../App.css";

const LogInOut = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>Log in / Sign up</button>
      )}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
    </>
  );
};

export default LogInOut;
