import React, { useState, useEffect } from "react";
import { useAuth0 } from "../react-auth0-spa";
import LogInOut from "./LogInOut";

import jsonFromApi from "../utils/jsonFromApi";

import CreatePresentation from "./Hosting/CreatePresentation";

import ParticipatingMain from "./Participating/ParticipatingMain";
import { CardPanel, Col, Row, Chip, Icon } from "react-materialize";
import Config from "../config";

const UserHome = () => {
  const { user, logout } = useAuth0();
  const { api } = Config;
  const [localUser, setLocalUser] = useState(null);
  const [hosting, setHosting] = useState(false);
  const [viewing, setViewing] = useState(false);
  const [instructions, setInstructions] = useState(true);

  const userdependentComponents = (
    <>
      <Row>
        <div className='logout-header'>
          <Chip
            close={false}
            closeIcon={<Icon className='close'>close</Icon>}
            options={null}
          >
            Logged in as: {user.email} <br></br>
            <button
              onClick={() => logout()}
              className='btn-small waves-effect waves-light'
            >
              Log out
            </button>
          </Chip>
        </div>
      </Row>

      <button
        className='btn-large waves-effect waves-light separate'
        onClick={() => {
          setViewing(false);
          setHosting(true);
          setInstructions(false);
        }}
      >
        Host
      </button>
      <button
        className='btn-large waves-effect waves-light separate'
        onClick={() => {
          setViewing(true);
          setHosting(false);
          setInstructions(false);
        }}
      >
        view
      </button>
      <Row>
        {instructions && (
          <div className='hero'>
            <div className='hero-text'>
              {" "}
              <p>
                To get started select "Host" or "View" above according to your
                role
              </p>
            </div>
          </div>
        )}
        {hosting && (
          <CreatePresentation localUser={localUser} className='hero' />
        )}
        {viewing && <ParticipatingMain localUser={localUser} />}
      </Row>
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

      {!localUser && <p> </p>}
    </>
  );
};

export default UserHome;
