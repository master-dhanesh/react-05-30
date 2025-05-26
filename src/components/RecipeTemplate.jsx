import { Link } from "react-router-dom";

const RecipeTemplate = (props) => {
    const { id, image, title, chef, desc } = props.recipe;
    return (
        <Link
            className="shadow-lg duration-200 hover:scale-50 "
            to={`/recipes/details/${id}`}
        >
            <img
                src="https://i.pinimg.com/736x/6f/1d/6d/6f1d6d52d3d5a5df53eb5cfcefa268ca.jpg"
                alt=""
            />
            <h1>{title}</h1>
            <small>{chef}</small>
            <p>
                {desc.substr(0, 30)}...{" "}
                <small className="text-blue-400">more</small>
            </p>
        </Link>
    );
};

export default RecipeTemplate;
