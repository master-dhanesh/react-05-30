import { useSelector } from "react-redux";

const App = () => {
    const data = useSelector((state) => state);
    console.log(data);
    return <div className="font-thin px-[10%] mt-10">App</div>;
};

export default App;
