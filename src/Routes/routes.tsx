import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
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
