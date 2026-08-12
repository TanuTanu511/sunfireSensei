import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import Home from "./components/components_lite/Home";
import Jobs from "./components/components_lite/Jobs";
import Browse from "./components/components_lite/Browse";
import Profile from "./components/components_lite/Profile";
import Description from "./components/components_lite/Description";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
   {
    path:"/Profile",
    element:<Profile/>
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path:"/Jobs",
    element: <Jobs/>
  },
  {
    path:"/Description/:id",
    element:<Description/>
  },
  {
    path:"/Browse",
    element:<Browse/>
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
}

export default App;
