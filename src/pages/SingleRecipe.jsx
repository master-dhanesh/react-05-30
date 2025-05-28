import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../contexts/RecipeContext";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const SingleRecipe = () => {
    const navigate = useNavigate();
    const { data, setdata } = useContext(recipecontext);
    const { id } = useParams();
    const recipe = data.find((r) => r.id == id);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            image: recipe.image,
            title: recipe.title,
            chef: recipe.chef,
            desc: recipe.desc,
            ingr: recipe.ingr,
            inst: recipe.inst,
        },
    });

    const SubmitHandler = (updatedrecipe) => {
        const index = data.findIndex((r) => r.id == id);
        const copydata = [...data];
        copydata[index] = { ...copydata[index], ...updatedrecipe };
        setdata(copydata);
        toast.success("recipe updated!");
    };

    const DeleteHandler = () => {
        const filteredRecipe = data.filter((r) => r.id != id);
        setdata(filteredRecipe);
        toast.success("recipe deleted!");
        navigate("/recipes");
    };

    return recipe ? (
        <div className="w-full  flex mt-10">
            {/*  */}
            <div className="left w-1/2 p-2">
                <h1 className="mb-5 text-5xl font-bold">{recipe.title}</h1>
                <img
                    className="w-full h-[40vh] object-cover"
                    src={recipe.image}
                    alt=""
                />
                <p className="text-lg">{recipe.desc}</p>
                <h1 className="mt-5 mb-3 text-2xl font-bold">Ingredients</h1>
                <p>{recipe.ingr}</p>

                <h1 className="mt-5 mb-3 text-2xl font-bold">Instructions</h1>
                <p>{recipe.inst}</p>
                <span className="text-white inline-block bg-green-400 px-4 py-2 rounded mt-5">
                    {recipe.category.toUpperCase()}
                </span>
            </div>
            {/*  */}
            <form
                className="right p-10 w-1/2"
                onSubmit={handleSubmit(SubmitHandler)}
            >
                <input
                    className="mb-5 w-full block text-2xl outline-0 border-b p-2"
                    {...register("image")}
                    type="url"
                    placeholder="Image"
                />
                <input
                    className="mb-5 w-full block text-2xl outline-0 border-b p-2"
                    {...register("title")}
                    type="text"
                    placeholder="Title"
                />
                <input
                    className="mb-5 w-full block text-2xl outline-0 border-b p-2"
                    {...register("chef")}
                    type="text"
                    placeholder="Chef Name"
                />
                <textarea
                    className="mb-5 w-full block text-2xl outline-0 border-b p-2"
                    {...register("desc")}
                    placeholder="enter description here"
                ></textarea>
                <textarea
                    className="mb-5 w-full block text-2xl outline-0 border-b p-2"
                    {...register("ingr")}
                    placeholder="enter ingredients, seperated by comma"
                ></textarea>
                <textarea
                    className="mb-5 w-full block text-2xl outline-0 border-b p-2"
                    {...register("inst")}
                    placeholder="enter instructions, seperated by comma"
                ></textarea>
                <select
                    className="mb-5 w-full block text-2xl outline-0 border-b p-2"
                    {...register("category")}
                >
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="supper">Supper</option>
                    <option value="dinner">Dinner</option>
                </select>
                <button
                    className="mr-5 text-xl px-4 py-2 bg-blue-400 rounded"
                    type="submit"
                >
                    Update Recipe
                </button>
                <button
                    onClick={DeleteHandler}
                    className="mr-5 text-xl px-4 py-2 bg-red-400 rounded"
                    type="button"
                >
                    Delete Recipe
                </button>
            </form>
            {/*  */}
        </div>
    ) : (
        "Loading..."
    );
};

export default SingleRecipe;
