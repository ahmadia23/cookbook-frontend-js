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
import { loader as loadCookbookDetails} from "./Pages/CookbookDetails";
import { loader as loadCookbookRecipes} from "./Pages/CookbookRecipes";
import CookbookDetails from "./Pages/CookbookDetails";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <RootLayout />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "cookbooks",
        loader: loadCookbooks,
        children: [
          { index: true, element: <Cookbooks />,  loader: loadCookbooks,},
          { path: ":cookbookId", loader: loadCookbookDetails, element: <CookbookDetails/>, children: [
            { path: "recipes", loader: loadCookbookRecipes, element: <CookbookRecipes /> }
          ]},
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
