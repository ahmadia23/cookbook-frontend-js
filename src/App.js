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
import RecipeNew from "./Pages/RecipeNew";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import store from "./store/index-redux";
import { loader as loadCookbooks } from "./Pages/Cookbooks";
import { loader as loadCookbookDetails } from "./Pages/CookbookDetails";
import { loader as loadCookbookRecipes } from "./Pages/CookbookRecipes";
import { loader as loadNewRecipe } from "./Pages/RecipeNew";
import { checkAuthLoader } from "./util/Authentification";
import { tokenLoader } from "./util/Authentification";
import { action as sendNewCookbook } from "./Pages/CookbookNew";
import { action as sendNewRecipe } from "./Pages/RecipeNew";
import { action as loginAction } from "./Pages/Login";
import { action as createNewUser } from "./Pages/Signup";
import { action as logoutAction } from "./Pages/Logout";
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
            loader: loadCookbookDetails,
            element: <CookbookDetails />,
            children: [
              {
                path: "recipes",
                loader: loadCookbookRecipes,
                element: <CookbookRecipes />,
              },
              {
                path: "new",
                action: sendNewRecipe,
                loader: loadNewRecipe,
                element: <RecipeNew />,
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
