import axios from "axios";

const Products = () => {
    const GetProducts = async () => {
        try {
            const res = await axios.get("https://fakestoreapi.com/products/");
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1 className="text-5xl mb-3">Products</h1>
            <button onClick={GetProducts}>Get Products</button>
        </div>
    );
};

export default Products;
