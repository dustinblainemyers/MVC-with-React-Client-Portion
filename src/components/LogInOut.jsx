import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import "../App.css";

const LogInOut = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div className='middle'>
      {!isAuthenticated && (
        <div>
          <button
            className='button solid hello'
            onClick={() => loginWithRedirect({})}
          >
            Log in / Sign up
          </button>
        </div>
      )}

      {isAuthenticated && (
        <button className='button solid' onClick={() => logout()}>
          Log out
        </button>
      )}
    </div>
  );
};

export default LogInOut;
