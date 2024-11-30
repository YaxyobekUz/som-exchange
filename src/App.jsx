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
import Profile from "./pages/Profile";
import Friends from "./pages/Friends";
import Exchange from "./pages/Exchange";

// Components
import Animate from "./components/Animate";

// Layouts
import MainLayout from "./layouts/MainLayout";

// Stickers
import Lottie from "lottie-react";
import loaderSticker from "./assets/stickers/loader.json";

const smoothClosingAnimationData = {
  name: "Start",
  data: [
    {
      start: 0,
      styles: {
        display: "flex",
        opacity: 1,
      },
    },
    {
      start: 2200,
      styles: {
        display: "flex",
        opacity: 1,
      },
    },
    {
      start: 2700,
      styles: {
        display: "flex",
        opacity: 0,
      },
    },
    {
      start: 3000,
      styles: {
        display: "none",
        opacity: 0,
      },
    },
  ],
};

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<Page404 />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="friends" element={<Friends />} />
        <Route path="profile" element={<Profile />} />
        <Route path="exchange" element={<Exchange />} />
      </Route>
    )
  );

  return (
    <div className="">
      <RouterProvider router={router} />;
      <Animate
        transition="opacity 300ms ease"
        keyframes={smoothClosingAnimationData}
        className="flex items-center justify-center fixed inset-0 z-50 w-screen h-screen bg-background transition-opacity"
      >
        <Lottie animationData={loaderSticker} className="size-14" />
      </Animate>
    </div>
  );
};

export default App;
