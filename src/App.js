import React from "react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import RootLayout from "./Pages/Root";
import Cookbooks from "./Pages/Cookbooks";
import CookbookNew from "./Pages/CookbookNew";
import CookbookRecipes from "./Pages/CookbookRecipes";
import ErrorPage from "./Pages/ErrorPage";
import CookbookDetails from "./Pages/CookbookDetails";
import RecipeDetails from "./Pages/RecipeDetails";
import RecipeNew from "./Pages/RecipeNew";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import store from "./store/index-redux";
import { loader as loadCookbooks } from "./Pages/Cookbooks";
import { loader as loadCookbookDetails } from "./Pages/CookbookDetails";
import { loader as loadCookbookRecipes } from "./Pages/CookbookRecipes";
import { loader as loadRecipeDetails } from "./Pages/RecipeDetails";
import { checkAuthLoader } from "./util/Authentification";
import { tokenLoader } from "./util/Authentification";
import { authRecipeAdd } from "./util/Authentification";
import { authRecipeDelete } from "./util/Authentification";
import { loadExistingRecipe } from "./Pages/RecipeNew";
import { sendEditedRecipe } from "./Pages/RecipeNew";
import { action as sendNewCookbook } from "./Pages/CookbookNew";
import { sendNewRecipe } from "./Pages/RecipeNew";
import { action as loginAction } from "./Pages/Login";
import { action as createNewUser } from "./Pages/Signup";
import { action as logoutAction } from "./Pages/Logout";
import { action as deleteCookbook } from "./Pages/CookbookDetails";
import { action as deleteRecipe } from "./Pages/RecipeDetails";
import { Provider } from "react-redux";

// import { action as sendNewCookbook } from "./components/CookbookForm";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <RootLayout />,
    id: "tokenLoader",
    loader: tokenLoader,
    children: [
      { path: "", element: <Home /> },
      {
        path: "cookbooks",
        loader: loadCookbooks,
        children: [
          { index: true, element: <Cookbooks />, loader: loadCookbooks },
          {
            path: ":cookbookId",
            children: [
              {
                index: true,
                loader: loadCookbookDetails,
                element: <CookbookDetails />,
              },
              {
                path: "recipes",
                children: [
                  {
                    index: true,
                    loader: loadCookbookRecipes,
                    element: <CookbookRecipes />,
                  },
                  {
                    path: ":recipeId",
                    loader: loadRecipeDetails,
                    element: <RecipeDetails />,
                  },
                  {
                    path: ":recipeId/delete",
                    loader: authRecipeDelete,
                    action: deleteRecipe,
                  },
                  {
                    path: ":recipeId/edit",
                    element: <RecipeNew editMode={true} />,
                    loader: loadExistingRecipe,
                    action: sendEditedRecipe,
                  },
                ],
              },
              {
                path: "new",
                action: sendNewRecipe,
                loader: authRecipeAdd,
                element: <RecipeNew />,
              },
              {
                path: "delete",
                action: deleteCookbook,
              },
            ],
          },
        ],
      },
      {
        path: "new",
        action: sendNewCookbook,
        loader: checkAuthLoader,
        element: <CookbookNew />,
      },
      { path: "login", action: loginAction, element: <Login /> },
      { path: "signup", action: createNewUser, element: <Signup /> },
      { path: "logout", action: logoutAction },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
