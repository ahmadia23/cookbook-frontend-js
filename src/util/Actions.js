import { redirect } from "react-router";
import { getAuthToken } from "./Authentification";

export const saveRecipe = async ({ request, params }) => {
  const token = getAuthToken();
  const recipeId = params.recipeId;
  console.log("from save recipe", recipeId);
  const cookbookId = params.cookbookId;

  console.log("right action cookbookid is: ", cookbookId);
  const response = await fetch(
    `http://localhost:8080/recipes/${recipeId}/save`,
    {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      method: "POST",
    }
  );
  if (response.status === 500) {
    const resData = await response.json();
    console.log(resData);
    return response;
  }
  if (response.status === 403) {
    return response;
  }

  return redirect(`/cookbooks/${cookbookId}/recipes`);
};
