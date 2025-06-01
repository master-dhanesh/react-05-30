import { useEffect, useState } from "react";
import axios from "../utils/axios";

const Products = () => {
    const [active, setactive] = useState(false);
    const [products, setproducts] = useState(null);

    const GetProducts = async () => {
        try {
            const res = await axios.get("/products/");
            console.log(res);
            setproducts(res);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        console.log("Product.jsx | Mounted");
        GetProducts();
        return () => {
            console.log("Product.jsx | Unmount");
        };
    }, [active]);

    console.log(active);

    return (
        <div>
            <h1 className="text-5xl mb-3">Products</h1>
            <hr />
            <button onClick={() => setactive(!active)}>
                {active ? "Unactive" : "Active"}
            </button>
        </div>
    );
};

export default Products;
