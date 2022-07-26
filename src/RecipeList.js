import React from "react";
import Recipe from "./Recipe";

function RecipeList({ recipes, performDeleteRecipe }) {
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
  function deleteRecipe(event) {
    event.preventDefault();
    const key = event.currentTarget.dataset.key;
    performDeleteRecipe(key);
  }

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, key) => {
            return (
              <tr key={key}>
                <Recipe recipe={recipe} key={key} />
                <td>
                  <button
                    name="delete"
                    key={key}
                    data-key={key}
                    onClick={deleteRecipe}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
