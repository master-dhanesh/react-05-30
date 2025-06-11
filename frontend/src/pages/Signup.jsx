import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
const Signup = () => {
    const { register, handleSubmit } = useForm();

    const SignupHandler = (user) => {
        user.id = nanoid();
        user.isAdmin = false;
        user.cart = [];
        console.log(user);
    };
    return (
        <form onSubmit={handleSubmit(SignupHandler)} className="w-full p-5">
            <input
                {...register("username")}
                className="w-full text-3xl mb-5 p-2 border-b outline-0"
                type="text"
                placeholder="john-doe"
            />

            <input
                {...register("email")}
                className="w-full text-3xl mb-5 p-2 border-b outline-0"
                type="text"
                placeholder="john@doe.doe"
            />
            <input
                {...register("password")}
                className="w-full text-3xl mb-5 p-2 border-b outline-0"
                type="password"
                placeholder="********"
            />
            <button className="text-white rounded mt-5 text-3xl px-5 py-3 bg-red-400">
                Signup User
            </button>
            <p className="mt-3">
                Already have an account?{" "}
                <Link className="text-blue-400" to="/signin">
                    Signin
                </Link>
            </p>
        </form>
    );
};

export default Signup;
