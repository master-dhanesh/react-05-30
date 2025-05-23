import { Route, Routes } from "react-router-dom";
import About from "../components/About";
import Home from "../components/Home";
import Products from "../components/Products";
import Services from "../components/Services";
import ProductDetails from "../components/ProductDetails";

const Mainroutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/products" element={<Products />} />
            <Route
                path="/products/details/:name"
                element={<ProductDetails />}
            /> */}

            <Route path="/products" element={<Products />}>
                {/*  */}
                <Route
                    path="/products/details/:name"
                    element={<ProductDetails />}
                />
                {/*  */}
            </Route>

            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
        </Routes>
    );
};

export default Mainroutes;
