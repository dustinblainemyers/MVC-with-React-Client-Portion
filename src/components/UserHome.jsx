import React, { useState, useEffect } from "react";
import { useAuth0 } from "../react-auth0-spa";
import LogInOut from "./LogInOut";
import getWithAwait from "../utils/getWithAwait";
import jsonFromApi from "../utils/jsonFromApi";

import CreatePresentation from "./Hosting/CreatePresentation";

import ParticipatingMain from "./Participating/ParticipatingMain";
import { Row, Col } from "react-materialize";
import Config from "../config";

const UserHome = () => {
  const { user } = useAuth0();
  const { api } = Config;
  const [localUser, setLocalUser] = useState(null);

  const userdependentComponents = (
    <Row>
      <Col>
        <CreatePresentation localUser={localUser} />
      </Col>

      <Col>
        <ParticipatingMain localUser={localUser} />
      </Col>
    </Row>
  );

  useEffect(() => {
    console.log("api", api);
    jsonFromApi(setLocalUser, `http://${api}/users/${user.email}`);
  }, [user.email]);

  return (
    <>
      {localUser && userdependentComponents}

      {!localUser && <p>There was a problem accessing your user data. </p>}
    </>
  );
};

export default UserHome;
