import React, { lazy, Suspense } from "react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index-redux";

const Home = lazy(() => import("./Pages/Home"));
const RootLayout = lazy(() => import("./Pages/Root"));

const Login = lazy(() => import("./Pages/Login"));
const Signup = lazy(() => import("./Pages/Signup"));

const Cookbooks = lazy(() => import("./Pages/Cookbooks"));
const CookbookNew = lazy(() => import("./Pages/CookbookNew"));
const CookbookRecipes = lazy(() => import("./Pages/CookbookRecipes"));
const CookbookDetails = lazy(() => import("./Pages/CookbookDetails"));

const RecipeDetails = lazy(() => import("./Pages/RecipeDetails"));
const RecipeNew = lazy(() => import("./Pages/RecipeNew"));
const SavingRecipes = lazy(() => import("./Pages/SavingRecipes"));

const ErrorPage = lazy(() => import("./Pages/ErrorPage"));

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: (
      <Suspense>
        <ErrorPage />
      </Suspense>
    ),
    element: (
      <Suspense>
        <RootLayout />
      </Suspense>
    ),
    id: "tokenLoader",
    loader: (meta) =>
      import("./util/Authentification").then((module) =>
        module.tokenLoader(meta)
      ),
    children: [
      {
        path: "",
        element: (
          <Suspense>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "cookbooks",
        loader: (meta) =>
          import("./Pages/Cookbooks").then((module) => module.loader(meta)),
        children: [
          {
            path: "",
            element: (
              <Suspense>
                <Cookbooks />
              </Suspense>
            ),
            loader: (meta) =>
              import("./Pages/Cookbooks").then((module) => module.loader(meta)),
          },
          {
            path: ":cookbookId",
            children: [
              {
                path: "",
                loader: (meta) =>
                  import("./Pages/CookbookDetails").then((module) =>
                    module.loader(meta)
                  ),
                element: (
                  <Suspense>
                    <CookbookDetails />
                  </Suspense>
                ),
                children: [
                  {
                    path: "recipes",
                    loader: (meta) =>
                      import("./Pages/CookbookRecipes").then((module) =>
                        module.loader(meta)
                      ),
                    element: (
                      <Suspense>
                        <CookbookRecipes />
                      </Suspense>
                    ),
                  },
                ],
              },
              {
                path: ":recipeId",
                loader: (meta) =>
                  import("./Pages/RecipeDetails").then((module) =>
                    module.loader(meta)
                  ),
                element: (
                  <Suspense>
                    <RecipeDetails />
                  </Suspense>
                ),
              },
              {
                path: ":recipeId/delete",
                loader: (meta) =>
                  import("./util/Authentification").then((module) =>
                    module.authRecipeDelete(meta)
                  ),
                action: (meta) =>
                  import("./Pages/RecipeDetails").then((module) =>
                    module.action(meta)
                  ),
              },
              {
                path: ":recipeId/edit",
                element: (
                  <Suspense>
                    <RecipeNew editMode={true} />
                  </Suspense>
                ),
                loader: (meta) =>
                  import("./Pages/RecipeNew").then((module) =>
                    module.loadExistingRecipe(meta)
                  ),
                action: (meta) =>
                  import("./Pages/RecipeNew").then((module) =>
                    module.sendEditedRecipe(meta)
                  ),
              },
              {
                path: ":recipeId/save",
                action: (meta) =>
                  import("./util/Actions").then((module) =>
                    module.saveRecipe(meta)
                  ),
              },
              {
                path: "new",
                action: (meta) =>
                  import("./Pages/RecipeNew").then((module) =>
                    module.sendNewRecipe(meta)
                  ),
                loader: (meta) =>
                  import("./util/Authentification").then((module) =>
                    module.authRecipeAdd(meta)
                  ),
                element: (
                  <Suspense>
                    <RecipeNew />
                  </Suspense>
                ),
              },
              {
                path: "delete",
                action: (meta) =>
                  import("./Pages/CookbookDetails").then((module) =>
                    module.action(meta)
                  ),
              },
            ],
          },
        ],
      },
      {
        path: "new",
        action: (meta) =>
          import("./Pages/CookbookNew").then((module) => module.action(meta)),
        loader: (meta) =>
          import("./util/Authentification").then((module) =>
            module.checkAuthLoader(meta)
          ),
        element: (
          <Suspense>
            <CookbookNew />
          </Suspense>
        ),
      },
      {
        path: "login",
        action: (meta) =>
          import("./Pages/Login").then((module) => module.action(meta)),
        element: (
          <Suspense>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "signup",
        action: (meta) =>
          import("./Pages/Signup").then((module) => module.action(meta)),
        element: (
          <Suspense>
            <Signup />
          </Suspense>
        ),
      },
      {
        path: "logout",
        action: (meta) =>
          import("./Pages/Logout").then((module) => module.action(meta)),
      },
      {
        path: "savings",
        loader: (meta) =>
          import("./Pages/SavingRecipes").then((module) => module.loader(meta)),
        element: (
          <Suspense>
            <SavingRecipes />
          </Suspense>
        ),
      },
      {
        path: ":recipeId/delete-saving",
        action: (meta) =>
          import("./Pages/SavingRecipes").then((module) => module.action(meta)),
      },
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
