import React, { Component } from "react";
import "./Navbar.css"
import PropTypes from 'prop-types';
class NavBar extends Component {
  static defaultProps = {
    onNewRecipe() { }
  }
  static propTypes={
    onNewRecipe: PropTypes.func
  }
  render() {
    const {onNewRecipe} = this.props;
    return (
      <header className="NavBar">
        <h1><a href="/">Recipe App</a></h1>
        <nav className="NavPoint">
          <li ><a onClick={onNewRecipe} href="/">New Recipe</a></li>
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Contact Us</a></li>
        </nav>
      </header>
    );
  }
}
export default NavBar;