import React, { Component } from 'react';
import Aggregate from './Aggregate';
import "../App.css";


class AggPage extends Component {
  
    
    
      
      
        render() {
          
          
          return (
          <>
            <Aggregate test={this.props.match.params.presentation_id} name={this.props.match.params.presentation_name}  key={this.props.match.params.presentation_id}/>
            
          </>
               
                           
          )
          
        }
    
    }
export default AggPage;