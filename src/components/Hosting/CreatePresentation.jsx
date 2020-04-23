// router.post("/generate", async function(req, res, next) {
//     console.log("req body:", req.body);
//     const { instructor, presentation_name } = req.body;
//     const lessonData = await createPresentation.addLesson(presentation_name, instructor)
//     console.log(lessonData)
//     res.sendStatus(200);

// const toggleLight = async (light_id, i, green_light) => {
//     console.log(`${light_id}light has been toggled`);
//     green_light = !green_light;
//     console.log("present", presentations);
//     await fetch(
//       `http://localhost:3333/join-presentation/lights/togglelight/${light_id}`,
//       { method: "PUT" }
//     );
//     const response = await fetch(
//       `http://localhost:3333/join-presentation/${user.email}`
//     );

import React, { useState, useEffect } from "react";
import { useAuth0 } from "../../react-auth0-spa";
import AllHosting from "./AllHosting";

import "../../App.css";

function TopHostingStack() {
  const { user } = useAuth0();

  const [presentations, setPresentations] = useState([]);
  const [presentation_name, setPresentationname] = useState("");

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
        console.log("There was an error in AllHosting  ");
      }
    }

    callApi();
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
    const response = await fetch(
      `http://localhost:3333/create-presentation/${user.email}`
    );
    const data = await response.json();
    //Comparer Function
    function GetSortOrder(prop) {
      return function (a, b) {
        if (a[prop] > b[prop]) {
          return 1;
        } else if (a[prop] < b[prop]) {
          return -1;
        }
        return 0;
      };
    }
    data.sort(GetSortOrder("id"));
    setPresentations(data);

    // setPresentations([...presentations.splice(i,1,{'green_light':green_light})])
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='presentation_name'
          value={presentation_name}
          onChange={(e) => setPresentationname(e.target.value)}
        />

        <input type='submit' value='Submit' />
      </form>
      <AllHosting presentations={presentations} />
    </>
  );
}

export default TopHostingStack;
