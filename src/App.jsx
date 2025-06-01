import { Link } from "react-router-dom";
import Mainroutes from "./routes/Mainroutes";

const App = () => {
    return (
        <div className="p-5 font-thin px-[10%]">
            <nav className="mb-10 flex gap-x-10">
                <Link to="/">Home</Link>
                <Link to="/product">Products</Link>
            </nav>
            <Mainroutes />
        </div>
    );
};

export default App;
