import React, { useState, useEffect } from "react";
import { useAuth0 } from "../react-auth0-spa";
import LogInOut from "./LogInOut";

import jsonFromApi from "../utils/jsonFromApi";

import CreatePresentation from "./Hosting/CreatePresentation";

import ParticipatingMain from "./Participating/ParticipatingMain";
import { CardPanel, Col, Row } from "react-materialize";
import Config from "../config";

const UserHome = () => {
  const { user, logout } = useAuth0();
  const { api } = Config;
  const [localUser, setLocalUser] = useState(null);
  const [hosting, setHosting] = useState(false);
  const [viewing, setViewing] = useState(false);

  const userdependentComponents = (
    <>
      <div>
        <span> Welcome ! {user.email}</span>{" "}
        <button
          onClick={() => logout()}
          className='btn-large waves-effect waves-light'
        >
          Log out
        </button>
      </div>

      <button
        className='btn-large waves-effect waves-light separate'
        onClick={() => {
          setViewing(false);
          setHosting(true);
        }}
      >
        Host
      </button>
      <button
        className='btn-large waves-effect waves-light separate'
        onClick={() => {
          setViewing(true);
          setHosting(false);
        }}
      >
        view
      </button>
      {hosting && (
        <div className='lesson-container'>
          <CreatePresentation localUser={localUser} className='hero' />
        </div>
      )}
      {viewing && <ParticipatingMain localUser={localUser} />}
    </>
  );

  useEffect(() => {
    console.log("api", api);
    jsonFromApi(setLocalUser, `${api}/users/${user.email}`);
  }, [user.email]);

  return (
    <>
      <header>
        <h1>Active Toggle</h1>
      </header>
      {localUser && userdependentComponents}

      {!localUser && <p>There was a problem accessing your user data. </p>}
    </>
  );
};

export default UserHome;
