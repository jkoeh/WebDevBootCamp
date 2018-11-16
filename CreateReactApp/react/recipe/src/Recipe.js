import React, { Component } from 'react';
import './Recipe.css'
import PropTypes from 'prop-types';
class Recipe extends Component {
    //we can add propTypes checking here
    static propTypes = {
        title: PropTypes.string.isRequired,
        ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
        instructions: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        onDelete: PropTypes.func.isRequired
      }
    render() {
        //assign props to value using deconstruction
        const { title, img, instruction, ingredients, onDelete,id} = this.props;
        const ingredientsList = ingredients.map((val, ind) => <li key={ind}>{val}</li>);

        return (
            <div className="recipe-card">
                <div className="recipe-card-image">
                    <img src={img} alt={title} />
                </div>
                <div className="recipe-card-content">
                    <h2 className="recipe-title">{title}</h2>
                    <ul>
                        {ingredientsList}
                    </ul>
                    <h2>Instructions:</h2>
                    <p>{instruction}</p>

                </div>
                <button type="button" onClick={()=> onDelete(id)}>Delete</button>
            </div>
        )
    }
}
export default Recipe;
