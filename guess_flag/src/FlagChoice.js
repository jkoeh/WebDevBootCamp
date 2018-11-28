import React, { Component } from 'react';
import './FlagChoice.css'


const FlagChoice =  props => {
        const {
        handleChange,
        options,
        handleSubmit
    } = props;
    let inputs = options.map(opt => (
        <label key={opt.id}>
            <input type="radio" name="country" value={opt.id} onChange={handleChange} />
            {opt.name}
        </label>
    ));
    return (
            <form onSubmit={handleSubmit}>
                {inputs}
                <button className="guess-button" type="submit">Guess</button>
            </form>
    );
}
export default FlagChoice;