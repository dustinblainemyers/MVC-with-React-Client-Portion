import React, { useState, useEffect } from "react";
import { useAuth0 } from "../react-auth0-spa";
import { CardPanel, Col, Row } from "react-materialize";

import "../App.css";

function ParticipatingMain(props) {
  const { user } = useAuth0();

  const [presentations, setPresentations] = useState([]);

  useEffect(() => {
    async function callApi() {
      if (user.email === false) {
        return false;
      }
      try {
        const response = await fetch(
          `http://localhost:3333/join-presentation/${user.email}`
        );
        const data = await response.json();

        console.log("api data", data);
        //Comparer Function
        function GetSortOrder(prop) {
          return function (a, b) {
            if (a[prop] > b[prop]) {
              return 1;
            } else if (a[prop] < b[prop]) {
              return -1;
            }
            return 0;
          };
        }
        data.sort(GetSortOrder("id"));
        setPresentations(data);
      } catch {
        console.log(
          "there was an error in the participating component api call"
        );
      }
    }

    callApi();
  }, [user.email]);

  const toggleLight = async (light_id, i, green_light) => {
    console.log(`${light_id}light has been toggled`);
    green_light = !green_light;
    console.log("present", presentations);
    await fetch(
      `http://localhost:3333/join-presentation/lights/togglelight/${light_id}`,
      { method: "PUT" }
    );
    const response = await fetch(
      `http://localhost:3333/join-presentation/${user.email}`
    );
    const data = await response.json();
    //Comparer Function
    function GetSortOrder(prop) {
      return function (a, b) {
        if (a[prop] > b[prop]) {
          return 1;
        } else if (a[prop] < b[prop]) {
          return -1;
        }
        return 0;
      };
    }
    data.sort(GetSortOrder("id"));
    setPresentations(data);

    // setPresentations([...presentations.splice(i,1,{'green_light':green_light})])
  };

  const notFound = "You are not an audience member of any presentations.";
  //   testing somthing
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
