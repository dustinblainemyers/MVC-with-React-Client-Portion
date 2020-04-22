async function callApi() {
    try {
      const response = await fetch(
        `http://localhost:3333/misc-endpoints/${user_id}`
      );
      
      const data = await response.json();
      

      setPresentations(data);

      
    } catch {
      console.log("There where issues with an api call");
    }
  }

  export default callApi