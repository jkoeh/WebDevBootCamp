import React from 'react';
import PropTypes from 'prop-types';
import './NavBar.css'


const NavBar =({onNewGame})=>(
    <header>
        <h2><a>MemoryGame</a></h2>
        <nav>
            <li>
                <a onClick={onNewGame}>New Game</a>
            </li>
        </nav>
    </header>
)
NavBar.PropTypes={
    onNewGame: PropTypes.func.isRequired
}

export default NavBar;