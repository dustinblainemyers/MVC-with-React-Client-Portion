import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import "../App.css";

const LogInOut = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <>
      {!isAuthenticated && (
        <div className='log-in-out'>
          <button
            onClick={() => loginWithRedirect({})}
            className='btn-large waves-effect waves-light separate '
          >
            Sign up
          </button>
          <button
            onClick={() => loginWithRedirect({})}
            className='btn-large waves-effect waves-light  separate'
          >
            Log in
          </button>
        </div>
      )}

      {isAuthenticated && (
        <button
          onClick={() => logout()}
          className='btn-large waves-effect waves-light'
        >
          Log out
        </button>
      )}
    </>
  );
};

export default LogInOut;
