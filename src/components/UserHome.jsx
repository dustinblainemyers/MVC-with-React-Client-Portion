import React, { useState, useEffect } from "react";
import { useAuth0 } from "../react-auth0-spa";
import LogInOut from "./LogInOut";
import getWithAwait from "../utils/getWithAwait";
import jsonFromApi from "../utils/jsonFromApi";

import CreatePresentation from "./Hosting/CreatePresentation";

import ParticipatingMain from "./Participating/ParticipatingMain";
import { Row, Col } from "react-materialize";

const UserHome = () => {
  const { user } = useAuth0();
  const [localUser, setLocalUser] = useState([]);

  useEffect(() => {
    const data = jsonFromApi(setLocalUser, `https://api/users/${user.email}`);
    console.log("json data", data);
  }, [user.email]);

  return (
    <Row>
      <Col>
        <CreatePresentation localUser={localUser} />
      </Col>

      <Col>
        <ParticipatingMain localUser={localUser} />
      </Col>
    </Row>
  );
};

export default UserHome;
