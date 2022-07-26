import React from "react";

function Recipe({ recipe }) {
  return (<>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td><img src={recipe.photo} alt=""/></td>
      <td>{recipe.ingredients}</td>
      <td className="preparation">{recipe.preparation}</td>
    </>
  );
}

export default Recipe;
