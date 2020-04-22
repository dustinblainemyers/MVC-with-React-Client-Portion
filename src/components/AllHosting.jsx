import React, { useState, useEffect } from "react";
import { useAuth0 } from "../react-auth0-spa";
import AggPage from "./AggPage";

import "../App.css";

function AllHosting() {
  const { loading, user } = useAuth0();

  const [presentations, setPresentations] = useState([]);

  useEffect(() => {
    async function callApi() {
      if (user.email === false) {
        return false;
      }
      try {
        const response = await fetch(
          `http://localhost:3333/create-presentation/${user.email}`
        );
        const data = await response.json();
        console.log("api data", data);
        setPresentations(data);
      } catch {
        console.log("There was an error in AllHosting ");
      }
    }

    callApi();
  }, [user.email]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='contained'>
      <h2>Presentations You Are Hosting</h2>

      <hr></hr>
      {presentations.length > 0 ? (
        presentations.map((presentation) => (
          
            <>
              <AggPage
                presentation_id={presentation.id}
                lesson_name={presentation.lesson_name}
                key={presentation.id}
              />
            </>
          
        ))
      ) : (
        <p>You are not hosting any presentations currently.</p>
      )}
    </div>
  );
}

export default AllHosting;
