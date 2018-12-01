import React, { Component } from 'react';
import './App.css';
import './Box.css'
const CardState={
  HIDING: 0,
  SHOWING: 1,
  MATCH: 2
}
/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
class App extends Component {
  constructor(props) {
    super(props);
    const rndColor=() => props.allColors[Math.floor(Math.random()* props.allColors.length)];
    let cards=[];
    for(let i = 0; i<8; i++){
      let color = rndColor();
      console.log(color)
      //create two box that matches
      cards.push({id: i, cardState: CardState.HIDING, backgroundColor: color});
      cards.push({id: i+8, cardState: CardState.HIDING, backgroundColor: color});
    }
    cards = shuffle(cards);
    this.state = {cards, noClick: false};
   
      
  }

  handleClick(id){
    //if the state is noClick or if the card is not hiding then ignore

    //change the card to showing, 

    //check cards in showing

    //if there are no showing cards, add this card to showing card state

    //if there are showing card , but they are not the same, revert both to Hidding
    
    //if there are showing card , and they are the same, set noclick to true then change both to MATCH, then set noClick to false

    //
  }
  render() {
    const cards = this.state.cards.map((x) => <Card key={x.id} backgroundColor={x.backgroundColor} />);
    return (
      <div className="App">
        {cards}
      </div>
    );
  }
}
const Card = ({backgroundColor, CardState }) => {
  let cardStyle = {backgroundColor: backgroundColor};
  return (
    <div className="card" style={cardStyle} >
    </div>
  );
}
App.defaultProps = {
  allColors: ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond",
    "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate",
    "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod",
    "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "Darkorange",
    "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey",
    "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue",
    "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod",
    "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki",
    "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan",
    "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon",
    "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow",
    "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid",
    "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise",
    "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy",
    "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen",
    "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue",
    "Purple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen",
    "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen",
    "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke",
    "Yellow", "YellowGreen"]
};

export default App;
