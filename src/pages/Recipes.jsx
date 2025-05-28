import { useContext } from "react";
import { Link } from "react-router-dom";
import { recipecontext } from "../contexts/RecipeContext";
import RecipeTemplate from "../components/RecipeTemplate";

const Recipes = () => {
    const { data, setdata } = useContext(recipecontext);

    const reciperender = data.map((recipe) => (
        <RecipeTemplate key={recipe.id} recipe={recipe} />
    ));

    return (
        <div className="flex flex-wrap ">
            <Link
                className="absolute right-[10%] bg-green-400 px-4 py-2 rounded"
                to="/recipes/create-recipe"
            >
                Create
            </Link>

            {data.length > 0 ? reciperender : "Recipe Not found..."}
        </div>
    );
};

export default Recipes;
