import "./App.css";
import Routes from "./Components/Routes";
import { BrowserRouter } from "react-router-dom";
import NavNar from "./Components/NavBar/NavNar";
import { ThemeProvider, createTheme } from '@mui/material/styles';

// const mytheme = createTheme({
//   components:{
//     MuiLink:{
//       styleOverrides:{
//         root:{
//           textDecoration:"none",
//         },
//       },
//     },
//   },
// }) 



function App() {
  return (
    <>
      {/* <ThemeProvider theme={mytheme}> */}
        <BrowserRouter>
          {" "}
          <NavNar />
          <Routes />
        </BrowserRouter>
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
