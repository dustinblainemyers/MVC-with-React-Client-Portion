import React, { useState, useEffect } from "react";
import { useAuth0 } from "../../react-auth0-spa";
import Aggregate from "./Aggregate";
import { CardPanel, Col, Row } from "react-materialize";

import "../../App.css";

function AllHosting(props) {
  const { user } = useAuth0();
  const { presentations } = props;
  return (
    <>
      {presentations.length > 0 ? (
        presentations.map((presentation) => (
          <>
            <Aggregate
              presentation_id={presentation.id}
              lesson_name={presentation.lesson_name}
              key={presentation.id}
            />
          </>
        ))
      ) : (
        <p>You are not hosting any presentations currently.</p>
      )}
    </>
  );
}

export default AllHosting;
