import React, { Component } from 'react';

class Hobbies extends Component{
    render(){
      const liStyle = {fontSize: '1.5em'};
      const hobbies = ["sleep", "eat", "meow"]
      return(
        //each child in an array or iterator should have a unique "key" prop
        <ul>
          {
            hobbies.map((h, i)=> <li key={i} style={liStyle}>{h}</li>)
          }
        </ul>
      )
    }
}
export default Hobbies;