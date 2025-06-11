import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
const Products = lazy(() => import("../pages/Products"));
const Signin = lazy(() => import("../pages/Signin"));
const Signup = lazy(() => import("../pages/Signup"));
const About = lazy(() => import("../pages/About"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));

// import Signin from "../pages/Signin";
// import Signup from "../pages/Signup";
// import About from "../pages/About";
// import PageNotFound from "../pages/PageNotFound";

const Mainroutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Products />} />

            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />

            <Route path="/about" element={<About />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
};

export default Mainroutes;
