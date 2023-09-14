import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";

const routes = [
    {
      key: "Home",
      path: "/",
      exact: true,
      component: Home,
    },
    {
      key: "AboutUs",
      path: "/",
      exact: true,
      component: AboutUs,
    },
  ];

export default routes;