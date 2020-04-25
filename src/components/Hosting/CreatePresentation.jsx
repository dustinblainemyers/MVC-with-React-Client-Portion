import React, { useState, useEffect } from "react";
import { useAuth0 } from "../../react-auth0-spa";
import AllHosting from "./AllHosting";
import { CardPanel, Col, Row } from "react-materialize";
import JsonSort from "../../utils/JsonSort";
import jsonFromApi from "../../utils/jsonFromApi";

import "../../App.css";

function TopHostingStack() {
  const { user } = useAuth0();

  const [presentations, setPresentations] = useState([]);
  const [presentation_name, setPresentationname] = useState("");
  const [lessonAdded, setLessonAdded] = useState(null);

  useEffect(() => {
    jsonFromApi(
      setPresentations,
      `http://localhost:3333/create-presentation/${user.email}`
    );
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
    generateAddedMessage();
    const response = await fetch(
      `http://localhost:3333/create-presentation/${user.email}`
    );
    const data = await response.json();

    data.sort(JsonSort("id"));
    setPresentations(data);
  };

  const handleDelete = async (lesson_id) => {
    await fetch(`http://localhost:3333/create-presentation/delete`, {
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
    const response = await fetch(
      `http://localhost:3333/create-presentation/${user.email}`
    );
    const data = await response.json();

    data.sort(JsonSort("id"));
    setPresentations(data);
  };

  const generateAddedMessage = () => {
    setLessonAdded(
      <>
        <div>
          lesson added
          <button onClick={removeAddedMessage}>Got it !</button>
        </div>
      </>
    );
  };

  const removeAddedMessage = () => {
    setLessonAdded(null);
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
          {lessonAdded}
          <AllHosting
            presentations={presentations}
            handleDelete={handleDelete.bind(this)}
          />
        </Row>
      </CardPanel>
    </>
  );
}

export default TopHostingStack;
