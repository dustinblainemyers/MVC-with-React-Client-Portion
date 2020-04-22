import React, { useState, useEffect } from "react";


import "../App.css";

function ViewUnjoined(props) {
  

  const [presentations, setPresentations] = useState([]);

  const { user_id } = props;
  
  useEffect(() => {
    
    async function callApi() {
      try {
        const response = await fetch(
          `http://localhost:3333/misc-endpoints/${user_id}`
        );
        // api call returns a list of presentations the user is not a part of.
        // select distinct test_lesson.lesson_name
        // from test_lesson   inner join  lights on test_lesson.id = lights.lesson_id
        // inner join users on lights.users_id = users.id WHERE users.id != ${users_id}`
        const data = await response.json();
        

        setPresentations(data);

        
      } catch {
        
      }
    }
    if (user_id) {
      callApi();
    }
  }, []);

  const notFound = "You are not an audience member of any presentations.";

  return (
    <div className='contained'>
      <h1>Your Presentations</h1>

      <hr></hr>
      {presentations.length > 0 ? (
        presentations.map((presentation, i) => (
          <>
            <span key={presentation.id}>{presentation.lesson_name}</span>
          </>
        ))
      ) : (
        <p>{notFound}</p>
      )}
    </div>
  );
}

export default ViewUnjoined;
