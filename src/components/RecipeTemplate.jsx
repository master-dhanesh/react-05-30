import { Link } from "react-router-dom";

const RecipeTemplate = (props) => {
    const { id, image, title, chef, desc } = props.recipe;
    return (
        <Link
            className="block w-[23vw] shadow-lg mr-3 mb-3"
            to={`/recipes/details/${id}`}
        >
            <img className="w-full h-[30vh] object-cover" src={image} alt="" />
            <h1 className="text-5xl font-black pl-2 mt-3">{title}</h1>
            <small className="pl-2 text-red-400 text-xl mt-3">{chef}</small>
            <p className="pl-2 mt-3 pb-10">
                {desc.substr(0, 100)}...{" "}
                <small className="text-blue-400">more</small>
            </p>
        </Link>
    );
};

export default RecipeTemplate;
