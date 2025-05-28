import Navbar from "./components/Navbar";
import Mainroutes from "./routes/Mainroutes";

const App = () => {
    return (
        <div className="p-5 font-thin px-[10%]">
            <Navbar />
            <Mainroutes />
        </div>
    );
};

export default App;
