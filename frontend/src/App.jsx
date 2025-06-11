import Nav from "./components/Nav";
import Mainroutes from "./routes/Mainroutes";

const App = () => {
    return (
        <div className="py-10 px-[10%] font-thin">
            <Nav />
            <Mainroutes />
        </div>
    );
};

export default App;
