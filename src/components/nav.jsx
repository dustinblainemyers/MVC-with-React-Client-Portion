import React, { Component } from 'react';


import "../App.css";
import { Link } from 'react-router-dom';

class Nav extends Component {
  
  
    render() {
      const {link} = this.props
      console.log("link", link)
      
      return (

      <ul class="nav">
        {link.length > 0 ? (
      
          link.map(link => (
            
            <nav>

              
              
                <a href={link.href} className="button solid">
                    {link.name}
                </a>
              
              
            
            </nav>
          
      
          ))
        ) : (
           <p>no data</p>
        )
      }
    </ul>
      
           
                       
      )
      
    }

}


export default Nav;