import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../src/pages/Components/Home";
import Posts from "./pages/Posts";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/posts', element: <Posts /> },
      // { path: '/userinfo', element: <Home /> },
      // { path: '/contact', element: <Home /> },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
