import React, { useState, useEffect } from "react";
import { useAuth0 } from "../../react-auth0-spa";
import AllHosting from "./AllHosting";
import { CardPanel, Col, Row } from "react-materialize";
import JsonSort from "../../utils/JsonSort";
import getWithAwait from "../../utils/getWithAwait";

import "../../App.css";

function TopHostingStack() {
  const { user } = useAuth0();

  const [presentations, setPresentations] = useState([]);
  const [presentation_name, setPresentationname] = useState("");
  // setPresentations(data);
  // `http://localhost:3333/create-presentation/${user.email}`
  useEffect(() => {
    const getHostedPresentations = async () => {
      const data = await getWithAwait(
        `http://localhost:3333/create-presentation/${user.email}`
      );
      setPresentations(data);
      console.log(data);
    };
    getHostedPresentations();
  }, [user.email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:3333/create-presentation/generate/hello`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: 8,
        presentation_name: presentation_name,
      }),
    });
    const response = await fetch(
      `http://localhost:3333/create-presentation/${user.email}`
    );
    const data = await response.json();

    data.sort(JsonSort("id"));
    setPresentations(data);
  };

  return (
    <>
      <CardPanel className='white'>
        <span className='black-text'>Your Presentations</span>
        <Row>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              name='presentation_name'
              value={presentation_name}
              onChange={(e) => setPresentationname(e.target.value)}
            />

            <input type='submit' value='Submit' />
          </form>
          <AllHosting presentations={presentations} />
        </Row>
      </CardPanel>
    </>
  );
}

export default TopHostingStack;
