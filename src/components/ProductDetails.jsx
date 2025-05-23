import { useNavigate, useParams } from "react-router-dom";
const ProductDetails = () => {
    const navigate = useNavigate();
    const params = useParams();
    console.log(params);

    const NavigateHandler = () => {
        // navigate("/products");
        navigate(-1);
    };
    return (
        <div>
            <h1 className="text-5xl">{params.name.toLocaleUpperCase()}</h1>
            <button onClick={NavigateHandler}>Go Back</button>
        </div>
    );
};

export default ProductDetails;
