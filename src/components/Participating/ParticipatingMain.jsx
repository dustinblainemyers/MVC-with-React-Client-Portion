import React, { useState, useEffect } from "react";
import { useAuth0 } from "../../react-auth0-spa";
import {
  CardPanel,
  Col,
  Row,
  Switch,
  TextInput,
  Card,
  Icon,
  CardTitle,
} from "react-materialize";
import jsonFromApi from "../../utils/jsonFromApi";
import "../../App.css";
import JsonSort from "../../utils/JsonSort";
import Config from "../../config";
import green_light from "../../images/green_light.svg";
import red_light from "../../images/red_light.svg";

function ParticipatingMain(props) {
  const { user } = useAuth0();
  const { api } = Config;
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
    await fetch(`${api}/join-presentation/lights/togglelight/${light_id}`, {
      method: "PUT",
    });
    getUpdate();
  };

  const getUpdate = () => {
    jsonFromApi(
      setPresentations,
      `${api}/join-presentation/${user.email}`,
      "id"
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const addLightResponse = await fetch(`${api}/join-presentation/generate`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        users_id: localUser.id,
        access_key: accessKey,
      }),
    });
    console.log(addLightResponse);
    // if (addLightResponse.status === 400) {
    //   generateMessage(
    //     "Something went wrong with joining this lesson.  Check your access key and try again",
    //     setMessage
    //   );
    // } else {
    //   generateMessage(`Successfully joined lesson: ${accessKey} `, setMessage);
    // }

    const response = await fetch(`${api}/join-presentation/${user.email}`);
    const data = await response.json();

    data.sort(JsonSort("id"));
    setPresentations(data);
    setAccessKey("");
  };

  const notFound = "You are not an audience member of any presentations.";

  const handleDelete = async (users_id, selectedAccessKey) => {
    await fetch(`${api}/join-presentation/delete`, {
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
    const response = await fetch(`${api}/join-presentation/${user.email}`);
    const data = await response.json();

    data.sort(JsonSort("id"));
    setPresentations(data);
  };

  return (
    <>
      <Row>
        <Col>
          <div className='hero'>
            <div className='create-join-instruct'>
              {" "}
              <p>
                To join a lesson, enter the lesson access key provided by your
                instructor below. Simply toggle your light to red to anonymously
                signal to your instructor that some part of the instruction
                needs to be modified.
              </p>
            </div>
          </div>{" "}
          <form onSubmit={handleSubmit}>
            <TextInput
              label='Access Key'
              type='text'
              name='accessKey'
              value={accessKey}
              onChange={(e) => setAccessKey(e.target.value)}
            />

            <input type='submit' value='Submit' />
          </form>
        </Col>
      </Row>

      <CardPanel>
        <Row>
          {presentations.length > 0 ? (
            presentations.map((presentation, i) => (
              <>
                <Col>
                  <CardPanel>
                    <div className='card-text '>
                      {presentation.lesson_name} {presentation.green_light}{" "}
                    </div>

                    {presentation.green_light && (
                      <img
                        src={green_light}
                        alt='Light is green'
                        key={presentation.id}
                        // onClick={() =>
                        //   toggleLight(
                        //     presentation.id,
                        //     i,
                        //     presentation.green_light
                        //   )
                        // }
                      />
                    )}
                    {!presentation.green_light && (
                      <img
                        src={red_light}
                        alt='Light is green'
                        key={presentation.id}
                        // onClick={() =>
                        //   toggleLight(
                        //     presentation.id,

                        //     presentation.green_light
                        //   )
                        // }
                      />
                    )}
                    <Switch
                      id={presentation.id}
                      offLabel='Green'
                      onChange={() =>
                        toggleLight(
                          presentation.id,

                          presentation.green_light
                        )
                      }
                      onLabel='Red'
                    />
                    <br />
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
            <Col>
              <p>{notFound}</p>
            </Col>
          )}
        </Row>
      </CardPanel>
    </>
  );
}

export default ParticipatingMain;
