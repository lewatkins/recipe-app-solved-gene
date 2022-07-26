import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  function deleteRecipe(recipe) {
    const copy = [...recipes];
    copy.splice(recipe, 1);
    setRecipes(copy);
  }

  function createRecipe(recipe) {
    const copy = [...recipes];
    copy.push(recipe);
    setRecipes(copy);
  }
  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      <RecipeList recipes={recipes} performDeleteRecipe={deleteRecipe} />
      <RecipeCreate performCreateRecipe={createRecipe} />
    </div>
  );
}

export default App;
