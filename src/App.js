import React from "react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import RootLayout from "./Pages/Root";
import Cookbooks from "./Pages/Cookbooks";
import CookbookNew from "./Pages/CookbookNew";
import CookbookRecipes from "./Pages/CookbookRecipes";
import ErrorPage from "./Pages/ErrorPage";
import { loader as loadCookbooks } from "./Pages/Cookbooks";
<<<<<<< HEAD
import { loader as loadCookbookDetails } from "./Pages/CookbookDetails";
import { loader as loadCookbookRecipes } from "./Pages/CookbookRecipes";
import CookbookDetails from "./Pages/CookbookDetails";
=======
>>>>>>> parent of de64699 (fixing bug + fetching recipes)

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <RootLayout />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "cookbooks",
        element: <Cookbooks />,
        loader: loadCookbooks,
        children: [
<<<<<<< HEAD
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
            ],
          },
=======
          { path: "recipes", element: <CookbookRecipes /> },
>>>>>>> parent of de64699 (fixing bug + fetching recipes)
        ],
      },
      { path: "new", element: <CookbookNew /> },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
