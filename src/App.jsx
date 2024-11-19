import React from "react";

// Router
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Page404 from "./pages/Page404";
import Premium from "./pages/Premium";
import Profile from "./pages/Profile";
import Friends from "./pages/Friends";
import Exchange from "./pages/Exchange";

// Layouts
import MainLayout from "./layouts/MainLayout";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<Page404 />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="friends" element={<Friends />} />
        <Route path="premium" element={<Premium />} />
        <Route path="profile" element={<Profile />} />
        <Route path="exchange" element={<Exchange />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
