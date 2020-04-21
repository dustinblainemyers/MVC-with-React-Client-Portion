import React, { useState, useEffect } from "react";
import { useAuth0 } from "../react-auth0-spa";

import "../App.css";

function ViewUnjoined(props) {
  const { user } = useAuth0();

  const [presentations, setPresentations] = useState([]);


  useEffect(() => {
    async function callApi() {
      if (user.email === false) {
        return false;
      }
      try {
        const response = await fetch(
          `http://localhost:3333/misc-endpoints/${this.props.user_id}`
        );
        // api call returns a list of presentations the user is not a part of.
      // select distinct test_lesson.lesson_name
      // from test_lesson   inner join  lights on test_lesson.id = lights.lesson_id
      // inner join users on lights.users_id = users.id WHERE users.id != ${users_id}`
        const data = await response.json();
        
        setPresentations(data);
      } catch {
        console.log(
          "there was an error in the viewunjoined api call"
        );
      }
    }

    callApi();
  }, [this.props.user_id]);

  

  const notFound = "You are not an audience member of any presentations.";

  return (
    <div className='contained'>
      <h1>Your Presentations</h1>

      <hr></hr>
      {presentations.length > 0 ? (
        presentations.map((presentation, i) => (
          <>
            <span key={presentation.id}>
              {presentation.lesson_name}
            </span>
            
          </>
        ))
      ) : (
        <p>{notFound}</p>
      )}
    </div>
  );
}

export default ViewUnjoined;