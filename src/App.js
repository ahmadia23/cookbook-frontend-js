import React from "react";
import CookbookList from "./components/CookbookList";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "cookbooks", element: <Home />, children:[
    { path: "new", element: <Home /> },
    { path: "recipes", element: <Home /> },
  ]},
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
