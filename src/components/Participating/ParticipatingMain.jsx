import React, { useState, useEffect } from "react";
import { useAuth0 } from "../../react-auth0-spa";
import { CardPanel, Col, Row } from "react-materialize";
import jsonFromApi from "../../utils/jsonFromApi";
import "../../App.css";

function ParticipatingMain() {
  const { user } = useAuth0();

  const [presentations, setPresentations] = useState([]);

  useEffect(() => {
    getUpdate();
  }, [user.email]);

  const toggleLight = async (light_id, green_light) => {
    console.log(`${light_id}light has been toggled`);
    green_light = !green_light;
    console.log("present", presentations);
    await fetch(
      `http://localhost:3333/join-presentation/lights/togglelight/${light_id}`,
      { method: "PUT" }
    );
    getUpdate();
  };

  const getUpdate = () => {
    jsonFromApi(
      setPresentations,
      `http://localhost:3333/join-presentation/${user.email}`,
      "id"
    );
  };

  const notFound = "You are not an audience member of any presentations.";

  return (
    <CardPanel className='white'>
      <span className='black-text'>Your Presentations</span>
      <Row>
        {presentations.length > 0 ? (
          presentations.map((presentation, i) => (
            <>
              <Col m={100} s={100} l={100}>
                <CardPanel className='white' key={presentation.id + i + 1000}>
                  <span className='black-text '>
                    {presentation.lesson_name} {presentation.green_light}{" "}
                  </span>
                  <div
                    className={presentation.green_light + ""}
                    onClick={() =>
                      toggleLight(presentation.id, i, presentation.green_light)
                    }
                  ></div>
                </CardPanel>
              </Col>
            </>
          ))
        ) : (
          <p>{notFound}</p>
        )}
      </Row>
    </CardPanel>
  );
}

export default ParticipatingMain;
