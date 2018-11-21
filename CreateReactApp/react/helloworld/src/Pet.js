import React, { Component } from 'react';
import './Pet.css';
import Hobbies from './Hobby.js'
class Pet extends Component{      
    render(){         
      
        return (        
            <div className="card">
              <h2 className="name">Amber</h2>
              <img src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/24176662_10154950620441440_2560713951000096349_n.jpg?_nc_cat=101&_nc_ht=scontent-lax3-1.xx&oh=8268f5a5adfd83f589b64a72e16b0e9d&oe=5C4C0469" 
              alt = "moxie my cat"/>
              <h5 style={{color: 'blue'}}>Hobbies</h5>               
              <Hobbies/>
            </div>
        )       
    }
  }
  export default Pet;