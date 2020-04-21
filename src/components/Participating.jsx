import React, { useState, useEffect } from "react";
import { useAuth0 } from "../react-auth0-spa";

import "../App.css";

function Participating(props) {
  const { user } = useAuth0();

  const [presentations, setPresentations] = useState([]);

  console.log("user email");
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

    setPresentations(data);

    // setPresentations([...presentations.splice(i,1,{'green_light':green_light})])
  };

  const notFound = "You are not an audience member of any presentations.";

  return (
    <div className='contained'>
      <h1>Your Presentations</h1>

      <hr></hr>
      {presentations.length > 0 ? (
        presentations.map((presentation, i) => (
          <>
            <span key={presentation.id}>
              {presentation.lesson_name} {presentation.green_light}{" "}
            </span>
            <p
              className={presentation.green_light + ""}
              onClick={() =>
                toggleLight(presentation.id, i, presentation.green_light)
              }
              key={presentation.lesson_name}
            ></p>
          </>
        ))
      ) : (
        <p>{notFound}</p>
      )}
    </div>
  );
}

export default Participating;
