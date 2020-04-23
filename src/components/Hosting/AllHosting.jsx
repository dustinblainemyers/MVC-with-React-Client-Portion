import React, { useState, useEffect } from "react";
import { useAuth0 } from "../../react-auth0-spa";
import AggPage from "./AggPage";

import "../../App.css";

function AllHosting(props) {
  const { user } = useAuth0();
  const { presentations } = props;
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
