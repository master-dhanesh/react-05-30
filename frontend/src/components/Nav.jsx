import { NavLink } from "react-router-dom";
const Nav = () => {
    return (
        <div className="flex gap-x-10 mb-10">
            <NavLink
                className={({ isActive }) => (isActive ? "text-red-400" : "")}
                to="/"
            >
                Home
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? "text-red-400" : "")}
                to="/signin"
            >
                Signin
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? "text-red-400" : "")}
                to="/about"
            >
                About
            </NavLink>
        </div>
    );
};

export default Nav;
