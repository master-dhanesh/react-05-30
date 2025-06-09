import { useDispatch, useSelector } from "react-redux";
import { create } from "./store/reducers/productSlice";
import { asyncloadproduct } from "./store/actions/productActions";
import { useEffect } from "react";

const App = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state);

    const createproduct = () => {
        const newproduct = {
            id: 2,
            title: "Mens Casual Premium Slim Fit T-Shirts ",
            price: 22.3,
            description:
                "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
            category: "men's clothing",
            image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        };

        // send to the store
        // actions -> dispatch(call())
        // normal function -> call()
        dispatch(create(newproduct));
    };

    const loadproduct = () => {
        dispatch(asyncloadproduct());
    };

    useEffect(() => {
        loadproduct();
    }, []);

    console.log(data);
    return (
        <div className="font-thin px-[10%] mt-10">
            <h1 className="text-5xl mb-5">App</h1>
            <button className="mb-10" onClick={createproduct}>
                Create Product
            </button>
            <button onClick={loadproduct}>Create Product</button>
        </div>
    );
};

export default App;
