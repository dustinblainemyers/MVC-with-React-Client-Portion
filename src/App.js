import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {
  state = {
    
    presentations: []
  };

  async componentDidMount() {
    
    const response = await fetch(`http://localhost:3333/join-presentation`);
    const data = await response.json();

    this.setState({
        presentations: data
      });
  
    }
  
    render() {
      const {presentations} = this.state
      console.log("api response 1", presentations[1])
      
      return (
      <>
        {presentations.length > 0 ? (
          presentations.map(presentation => (
            
            <p>{presentation.id} hello</p>
      
          ))
        ) : (
           <p>no data</p>
        )
      }
      </>
           
                       
      )
      
    }

}


export default App;
  
