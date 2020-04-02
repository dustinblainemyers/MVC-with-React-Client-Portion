import React, { Component } from 'react';

import AudienceJoinPres from './AudienceJoinPres'
import "../App.css";
import { Link } from 'react-router-dom';

class Audience extends Component {
  
  
    render() {
      
      
      return (
      <>
       <Link to={`/audience/join-presentation`}>
        Join A Presentation
      </Link>
      </>
           
                       
      )
      
    }

}


export default Audience;
  