import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Experience from "../pages/Experience";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <About />,
      },
      {
        path: "/experience",
        element: <Experience />,
      },
      {
        path: "/projects",
      },
      {
        path: "/contact",
      },
    ],
  },
]);

export default Router;
