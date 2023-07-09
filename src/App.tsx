import "./App.scss";
import CustomCursor from "./components/CustomCursor";
import Header from "./components/Header";
import Home from "./page/home";

function App() {
    return (
        <div className='App'>
            <CustomCursor />
            <Header />
            <Home />
        </div>
    );
}

export default App;
