import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="flex justify-center gap-x-10 my-5">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/services">Services</Link>
            <Link to="/about">About</Link>
        </div>
    );
};

export default Nav;
