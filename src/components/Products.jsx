import { Link, Outlet } from "react-router-dom";

const Products = () => {
    return (
        <div>
            <h1 className="text-3xl mb-5">Products</h1>
            <div className="bg-gray-300 rounded p-3">
                <h1 className="flex justify-between items-center mb-3">
                    <span>Product 1</span>
                    <Link
                        to="/products/details/product-1"
                        className="text-blue-400"
                    >
                        Show More
                    </Link>
                </h1>
                <h1 className="flex justify-between items-center mb-3">
                    <span>Product 2</span>
                    <Link
                        to="/products/details/product-2"
                        className="text-blue-400"
                    >
                        Show More
                    </Link>
                </h1>
                <h1 className="flex justify-between items-center mb-3">
                    <span>Product 3</span>
                    <Link
                        to="/products/details/product-3"
                        className="text-blue-400"
                    >
                        Show More
                    </Link>
                </h1>
            </div>
            <hr className="my-5" />
            <Outlet />
        </div>
    );
};

export default Products;
