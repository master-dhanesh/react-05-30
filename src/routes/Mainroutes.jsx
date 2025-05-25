import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import Create from "../pages/Create";
import Update from "../pages/Update";
import SingleRecipe from "../pages/SingleRecipe";
import Favroite from "../pages/Favroite";
import About from "../pages/About";
import PageNotFound from "../pages/PageNotFound";

const Mainroutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipes/create-recipe" element={<Create />} />
            <Route path="/recipes/update-recipe" element={<Update />} />
            <Route path="/recipes/details/:id" element={<SingleRecipe />} />

            <Route path="/favroite" element={<Favroite />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
};

export default Mainroutes;
