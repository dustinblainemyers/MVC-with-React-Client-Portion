import React, { Component } from "react";

import "../App.css";

class ViewUnjoined extends Component {
  state = {
    presentations: [],
  };

  async componentDidMount() {
    
    try {
      const response = await fetch(
        `http://localhost:3333/misc-endpoints/${this.props.user_id}`
      );
      // api call returns a list of presentations the user is not a part of.
      // select distinct test_lesson.lesson_name
      // from test_lesson   inner join  lights on test_lesson.id = lights.lesson_id
      // inner join users on lights.users_id = users.id WHERE users.id != ${users_id}`
      const data = await response.json();

      this.setState({
        presentations: [...this.state.presentations, data],
      });
    } catch {
      console.log("there was an error in the ViewUnjoined api call");
    }
  }

  render() {
    const { presentations } = this.state;

    return (
      <div className='contained'>
        <h1>Join a presentation</h1>
        <hr></hr>
        {presentations.length > 0 ? (
          presentations.map((presentation) => (
            <p>
              <button>{presentation.lesson_name} </button>
            </p>
          ))
        ) : (
          <p>You are not an audience member of any presentations.</p>
        )}
      </div>
    );
  }
}

export default ViewUnjoined;
