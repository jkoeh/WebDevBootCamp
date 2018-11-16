import React, { Component } from "react";
import Navbar from "./Navbar.js"
import "./RecipeApp.css";
import RecipeList from './RecipeList';
import RecipeInput from './RecipeInput';

class RecipeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {
          id: 0,
          title: "Spaghetti",
          instructions: "Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce",
          ingredients: ["pasta", "8 cups water", "1 box spaghetti"],
          img: "spaghetti.jpg"
        },
        {
          id: 1,
          title: "Milkshake",
          instructions: "Combine ice cream and milk.  Blend until creamy",
          ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
          img: "milkshake.jpg"
        },
        {
          id: 2,
          title: "Avocado Toast",
          instructions: "Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.",
          ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
          img: "avocado_toast.jpg"
        },
      ],
      nextRecipeId: 3,
      showForm: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleSubmit(recipe) {
    const newRecipe = { id: this.state.nextRecipeId, ...recipe };
    const nextRecipeId = this.state.nextRecipeId + 1;

    this.setState({ recipes: [...this.state.recipes, newRecipe], nextRecipeId, showForm: false })

  }
  handleDelete(id){
    const recipes = this.state.recipes.filter(r=> r.id!= id);
    this.setState({recipes});
  }
  render() {
    const { showForm } = this.state;
    return (
      <div>
        <Navbar onNewRecipe={event=> {event.preventDefault(); this.setState({showForm: true});}}/>
        {showForm ?
          <RecipeInput 
          onClose={()=> this.setState({showForm: false})}
          onSave={this.handleSubmit} /> :
          null}
        <RecipeList onDelete={this.handleDelete} recipes={this.state.recipes} />
      </div>
    );
  }
}

export default RecipeApp;
