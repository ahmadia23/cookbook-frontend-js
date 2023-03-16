import { redirect } from "react-router";
import { json } from "react-router";

export const getTokenDuration = () => {
  const storedExpirationDate = localStorage.getItem("expiration");
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
};

export const getAuthToken = () => {
  const token = localStorage.getItem("token");
  const tokenDuration = getTokenDuration();

  if (!token) {
    return null;
  }

  if (tokenDuration < 0) {
    return "EXPIRED";
  }

  return token;
};

export const tokenLoader = () => {
  return getAuthToken();
};

export const getUserId = () => {
  const userId = localStorage.getItem("userId");
  if (!userId) {
    return null;
  }
  return userId;
};

export const checkAuthLoader = () => {
  const token = getAuthToken();

  if (!token) {
    return redirect("/login");
  }
  return null;
};

export const authorizeActions = async ({ request, params }, accessType) => {
  const token = getAuthToken();
  const cookbookId = params.cookbookId;

  const response = await fetch(
    `https://cookbook-backend12.herokuapp.com/allow/${cookbookId}?accessType=${accessType}`,
    {
      headers: { Authorization: "Bearer " + token },
    }
  );

  if (response.status === 403) {
    throw json({ message: "Forbidden" }, { status: 403 });
  }
  if (!response.ok) {
    throw json({ message: "could not fetch the result" }, { status: 500 });
  }

  return response;
};

export const authRecipeAdd = async (
  { request, params },
  accessType = "addNewRecipe"
) => {
  return authorizeActions({ request, params }, accessType);
};
export const authRecipeDelete = async (
  { request, params },
  accessType = "deleteRecipe"
) => {
  return authorizeActions({ request, params }, accessType);
};
