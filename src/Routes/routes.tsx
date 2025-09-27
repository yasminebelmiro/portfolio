import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Experience from "../pages/Experience";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
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
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default Router;
