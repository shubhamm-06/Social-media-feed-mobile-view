import Login from "./views/Home";
import Register from "./views/Register";
import Feed from "./views/Feed";
import UserMatch from "./views/User_Match";
import Test from "./views/Test";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Custom Theme & Color
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#a70e13",
//     },
//     secondary: {
//       main: "#bd0f15",
//     },
//     white: {
//       main: "#FFFFFF",
//     },
//   },

//   typography: {
//     fontFamily: [
//       "Amiko",
//       "Covered By Your Grace",
//       "BlinkMacSystemFont",
//       "sans-serif",
//     ].join(","),
//   },
// });

function App() {
  return (
    // <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/hook" element={<Register />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/match" element={<UserMatch />} />
          <Route path="/Test" element={<Test />} />
        </Routes>
      </Router>
    // </ThemeProvider>
  );
}

export default App;
