import React, { useState } from "react";

function RecipeCreate({ performCreateRecipe }) {
  const [recipe, createRecipe] = useState({
    name: "",
    ingredients: "",
    photo: "",
    cuisine: "",
    preparation: "",
  });
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  function doCreate(event) {
    event.preventDefault();
    if (!validForm(recipe)) {
      alert('One or more of the create new recipe fields is empty. Please fill everything out before submitting');
      return;
    }
    performCreateRecipe(recipe);
    const reset = {
      name: "",
      ingredients: "",
      photo: "",
      cuisine: "",
      preparation: "",
    };
    createRecipe(reset);
  }

  const handleChange = (event) => {
    const copy = { ...recipe };
    copy[event.target.name] = event.target.value;
    createRecipe(copy);
  };

  const validForm = (recipe) => {
    if (recipe.name.trim() === "" ||
    recipe.ingredients.trim() === "" ||
    recipe.photo.trim() === "" ||
    recipe.cuisine.trim() === "" ||
    recipe.preparation.trim() === "") {
      return false;
    }
    return true;
  }

  return (
    <form name="create" onSubmit={doCreate}>
      <table>
        <tbody>
          <tr>
            <td>
              Name:
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={recipe.name}
              />
            </td>
            <td>
              Cuisine:
              <input
                type="text"
                name="cuisine"
                value={recipe.cuisine}
                onChange={handleChange}
              />
            </td>
            <td>
              <textarea
                name="ingredients"
                onChange={handleChange}
                rows="5"
                cols="10"
                placeholder="Ingredients"
                value={recipe.ingredients}
              ></textarea>
            </td>
            <td>
              <textarea
                name="preparation"
                onChange={handleChange}
                rows="5"
                cols="10"
                placeholder="Preparation"
                value={recipe.preparation}
              ></textarea>
            </td>
            <td>
              Photo:
              <input
                type="text"
                name="photo"
                value={recipe.photo}
                onChange={handleChange}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
