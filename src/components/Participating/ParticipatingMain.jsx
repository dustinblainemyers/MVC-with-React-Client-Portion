import React, { useState, useEffect } from "react";
import { useAuth0 } from "../../react-auth0-spa";
import { CardPanel, Col, Row } from "react-materialize";
import jsonFromApi from "../../utils/jsonFromApi";
import "../../App.css";
import JsonSort from "../../utils/JsonSort";

function ParticipatingMain(props) {
  const { user } = useAuth0();

  const [presentations, setPresentations] = useState([]);
  const [accessKey, setAccessKey] = useState("");
  const { localUser } = props;

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const addLightResponse = await fetch(
      `http://localhost:3333/join-presentation/generate`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          users_id: localUser.id,
          access_key: accessKey,
        }),
      }
    );
    console.log(addLightResponse);
    // if (addLightResponse.status === 400) {
    //   generateMessage(
    //     "Something went wrong with joining this lesson.  Check your access key and try again",
    //     setMessage
    //   );
    // } else {
    //   generateMessage(`Successfully joined lesson: ${accessKey} `, setMessage);
    // }

    const response = await fetch(
      `http://localhost:3333/join-presentation/${user.email}`
    );
    const data = await response.json();

    data.sort(JsonSort("id"));
    setPresentations(data);
  };

  const notFound = "You are not an audience member of any presentations.";

  const handleDelete = async (users_id, selectedAccessKey) => {
    await fetch(`http://localhost:3333/join-presentation/delete`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: selectedAccessKey,
        users_id: users_id,
      }),
    });
    console.log(selectedAccessKey);
    const response = await fetch(
      `http://localhost:3333/join-presentation/${user.email}`
    );
    const data = await response.json();

    data.sort(JsonSort("id"));
    setPresentations(data);
  };

  return (
    <CardPanel className='white'>
      <span className='black-text'>Viewing</span>
      <Row>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='accessKey'
            value={accessKey}
            onChange={(e) => setAccessKey(e.target.value)}
          />

          <input type='submit' value='Submit' />
        </form>
        {presentations.length > 0 ? (
          presentations.map((presentation, i) => (
            <>
              <Col m={100} s={100} l={100}>
                <CardPanel
                  className='white'
                  key={presentation.access_key + i + 1000}
                >
                  <span className='black-text '>
                    {presentation.lesson_name} {presentation.green_light}{" "}
                    {presentation.access_key}
                  </span>
                  <div
                    className={presentation.green_light + ""}
                    onClick={() =>
                      toggleLight(
                        presentation.access_key,
                        i,
                        presentation.green_light
                      )
                    }
                  ></div>
                  <button
                    onClick={() =>
                      handleDelete(localUser.id, presentation.access_key)
                    }
                  >
                    Delete
                  </button>
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
