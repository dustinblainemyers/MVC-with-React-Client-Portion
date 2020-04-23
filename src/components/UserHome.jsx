import React, { useState, useEffect } from "react";
import { useAuth0 } from "../react-auth0-spa";
import LogInOut from "./LogInOut";
import AllHosting from "./Hosting/AllHosting";

import ViewUnjoined from "./ViewUnjoined";
import ParticipatingMain from "./Participating/ParticipatingMain";
import { Row, Col, Card } from "react-materialize";

const UserHome = () => {
  const { user } = useAuth0();
  const [user_id, setUserID] = useState([]);

  async function callApi() {
    if (user.email === false) {
      return false;
    }
    try {
      const response = await fetch(`http://localhost:3333/users/${user.email}`);
      const data = await response.json();

      setUserID(data.id);
    } catch {
      // setUserID(1)}

      console.log("there was an error with an api call in UserHome ");
    }
  }

  useEffect(() => {
    callApi();
  }, [user_id]);

  return (
    <>
      <Row>
        <nav>
          <div class='nav-extended'>
            <a href='#' class='brand-logo'>
              LightBoard
              <h1>Green Light Red Light</h1>
              Logged in as :{user.email}
            </a>
            <ul id='nav-mobile' class='right hide-on-med-and-down'></ul>
          </div>
        </nav>
      </Row>
      <Row>
        <Col>
          <Card>
            <AllHosting />
          </Card>

          <ViewUnjoined user_id='8' />
        </Col>
        <Col>
          <ParticipatingMain />
        </Col>
      </Row>
    </>
  );
};

export default UserHome;
