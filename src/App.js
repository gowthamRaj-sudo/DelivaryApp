import "./App.css";
import Routes from "./Components/Routes";
import { BrowserRouter } from "react-router-dom";
import NavNar from "./Components/NavBar/NavNar";

function App() {
  return (
    <>
      <BrowserRouter>
        {" "}
        <NavNar/>
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
