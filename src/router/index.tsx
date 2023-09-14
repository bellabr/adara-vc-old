import { Route, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Footer from "../components/Footer";
import Header from "../components/Header";
import routes from "./config";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <div> <Header/> <Home/> </div>
    },
]);

// const Router = () => {
//     return (
//         <div>
//             <Header/>
//             <Route/>
//             {/* <Switch> */}
//                 {/* {routes.map((routeItem) => {
//                     return (
//                         <Route
//                             key={routeItem.key}
//                             exact={routeItem.exact}
//                             path={routeItem.path}
//                             component={routeItem.component}
//                         />
//                     );
//                 })} */}
//             {/* </Switch> */}
//             <Footer />
//         </div>
//     )
// }

export default Router;