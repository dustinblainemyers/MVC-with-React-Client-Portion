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
        presentations: [this.state.presentations, data]
      });
  
    }
  
    render() {
      const {presentations} = this.state
      console.log("api response", presentations)
      
      return (
        
           
                     <p>hello</p>   
                 
            
  
        
    )
  
    }
  }
  
  export default App


//   render() {
//     const {presentations} = this.state
//     return (
      
//       {presentations.length > 0 ? (
        
//         presentations.map((presentation,index) => (
//             <p>
//              {presentation.id}
  
//             </p>
          

            
//         ))
//       ) : (
//         <li>No User Data</li>
//       )}
     
//     );
//   }
// }

// export default App;
