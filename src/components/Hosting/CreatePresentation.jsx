import React, { useState, useEffect } from "react";
import { useAuth0 } from "../../react-auth0-spa";
import AllHosting from "./AllHosting";
import { CardPanel, Col, Row, TextInput } from "react-materialize";
import JsonSort from "../../utils/JsonSort";
import jsonFromApi from "../../utils/jsonFromApi";
import Config from "../../config";

import "../../App.css";

function TopHostingStack(props) {
  const { user } = useAuth0();
  const { localUser } = props;
  const [presentations, setPresentations] = useState([]);
  const [presentationName, setPresentationName] = useState("");
  const [message, setMessage] = useState(null);
  const { api } = Config;
  useEffect(() => {
    jsonFromApi(setPresentations, `${api}/create-presentation/${user.email}`);
  }, [user.email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const accessKey =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);

    console.log("accesskey", accessKey);
    // need to create a function that checks for uniqueness -- right now a uniqe constraint sql side is preventing
    // a non-unique access key from being assigned but I want a new access key to be generated in this case instead of erroring out.
    const createResponse = await fetch(
      `${api}/create-presentation/generate/hello`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: localUser.id,
          presentationName: presentationName,
          accessKey: accessKey,
        }),
      }
    );
    console.log(createResponse);
    if (createResponse.status === 400) {
      generateMessage("Something went wrong creating this lesson", setMessage);
    } else {
      generateMessage(
        `Successfully created lesson.  Copy and paste the following key to share this presentation : ${accessKey} `,
        setMessage
      );
    }

    const response = await fetch(`${api}/create-presentation/${user.email}`);
    const data = await response.json();

    data.sort(JsonSort("id"));
    setPresentations(data);
    setPresentationName("");
  };

  const handleDelete = async (lesson_id) => {
    await fetch(`${api}/create-presentation/delete`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        lesson_id: lesson_id,
      }),
    });
    console.log(lesson_id);
    const response = await fetch(`${api}/create-presentation/${user.email}`);
    const data = await response.json();

    data.sort(JsonSort("id"));
    setPresentations(data);
  };

  const generateMessage = (message, setter) => {
    setter(
      <>
        <div>
          {message}
          <button
            onClick={() => {
              removeAddedMessage(setter);
            }}
          >
            Got it !
          </button>
        </div>
      </>
    );
  };

  const removeAddedMessage = (setterToNull) => {
    setterToNull(null);
  };

  return (
    <>
      <Row>
        <div className='hero'>
          <div className='create-join-instruct'>
            {" "}
            <p>
              To create a lesson simply enter the name of your presentation
              below. You will be provided with an access key you can share with
              your students. Your light will turn red if over 50% of your
              students signify that some part of the instruction needs to be
              modified or explained.
            </p>
          </div>
        </div>{" "}
        <form onSubmit={handleSubmit}>
          <TextInput
            error='That is not a valid access key'
            success='Topic added to your viewing list'
            label='Presentation Name'
            type='text'
            name='presentationName'
            value={presentationName}
            onChange={(e) => setPresentationName(e.target.value)}
          />

          <input type='submit' value='Submit' />
        </form>
        {message}
      </Row>
      <AllHosting
        presentations={presentations}
        handleDelete={handleDelete.bind(this)}
      />
    </>
  );
}

export default TopHostingStack;
