
import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Vlogs from "../pages/vlogs/page";
import Blog from "../pages/blog/page";
import About from "../pages/about/page";
import Contact from "../pages/contact/page";
import Privacy from "../pages/privacy/page";
import Terms from "../pages/terms/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/vlogs",
    element: <Vlogs />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/privacy",
    element: <Privacy />,
  },
  {
    path: "/terms",
    element: <Terms />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;