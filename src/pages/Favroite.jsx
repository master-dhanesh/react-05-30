import { useContext } from "react";
import { recipecontext } from "../contexts/RecipeContext";
import RecipeTemplate from "../components/RecipeTemplate";

const Favroite = () => {
    const { fav } = useContext(recipecontext);

    const favrender = fav.map((f) => <RecipeTemplate key={f.id} recipe={f} />);

    return (
        <div className="flex flex-wrap ">
            {fav.length > 0 ? favrender : "Recipe Not found..."}
        </div>
    );
};

export default Favroite;
