import React, { Component } from 'react';

import Aggregate from './Aggregate';
import "../App.css";

import LogInOut from "./LogInOut";
import Nav from './nav'

class AggPage extends Component {
  
    
    
      
      
        render() {
          
          
          return (
          <>
            <Aggregate test={this.props.match.params.presentation_id} key={this.props.match.params.presentation_id}/>
            
          </>
               
                           
          )
          
        }
    
    }
export default AggPage;