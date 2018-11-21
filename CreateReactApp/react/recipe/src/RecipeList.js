import React, { Component } from 'react';
import './RecipeList.css';
import Recipe from './Recipe';
import PropType from 'prop-types';

class RecipeList extends Component {
    static propTypes = {
        recipes: PropType.arrayOf(PropType.object).isRequired,
        onDelete: PropType.func.isRequired
    }
    render() {
        const { onDelete } = this.props;
        const recipes = this.props.recipes.map((recipe, ind) =>
            (<Recipe onDelete={onDelete} key={recipe.id} {...recipe} />));
        return (<div className="recipe-list">{recipes}</div>)
    }
}
export default RecipeList;