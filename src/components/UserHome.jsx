import React, { useState, useEffect } from "react";
import { useAuth0 } from "../react-auth0-spa";
import LogInOut from "./LogInOut";
import getWithAwait from "../utils/getWithAwait";

import CreatePresentation from "./Hosting/CreatePresentation";

import ParticipatingMain from "./Participating/ParticipatingMain";
import { Row, Col } from "react-materialize";

const UserHome = () => {
  const { user } = useAuth0();
  const [user_id, setUserID] = useState("");

  useEffect(() => {
    const getUserId = async () => {
      const data = await getWithAwait(
        `http://localhost:3333/users/${user.email}`
      );
      setUserID(data.id);
      console.log(data);
    };
    getUserId();
  }, [user_id]);

  return (
    <Row>
      <Col>
        <CreatePresentation />
      </Col>

      <Col>
        <ParticipatingMain />
      </Col>
    </Row>
  );
};

export default UserHome;
