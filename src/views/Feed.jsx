import React from "react";
import Loader from "../components/feed/Loader";
// import RightBar from "../components/feed/RightBar";
import Searchbtn from "../components/feed/Searchbtn";
import LeftBar from "../components/feed/LeftBar";
import "../components/feed/Feed.css";
import Bottombar from "../components/feed/Bottombar";
import Topbar from "../components/feed/Topbar";
import { Box } from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles";

// Custom Theme & Color
const theme = createTheme({
  palette: {
    primary: {
      main: "#a70e13",
    },
    secondary: {
      main: "#bd0f15",
    },
    white: {
      main: "#FFFFFF",
    },
  },

  typography: {
    fontFamily: [
      "Amiko",
      "Covered By Your Grace",
      "BlinkMacSystemFont",
      "sans-serif",
    ].join(","),
  },
});

const Feed = () => {
  return (
  <ThemeProvider theme={theme}>
    <Box component="div" sx={{width:"100vw",}}>
      <Box
        sx={{
          width: { xs: "100vw", md: "0%" },
          display: { xs: "block", sm: "none", md: "none" },
          mb: 7,
        }}
      >
        <Topbar />
      </Box>





      <Box sx={{ display: "flex", flexDirectoin: "row", }}>
        <Box
          sx={{
            width: { xs: "0%", md: "25%" },
            display: { xs: "none", sm: "none", md: "block" },
          }}
        >
          <LeftBar />
        </Box>
        <Box sx={{ width: { xs: "100%", md: "50%" }, zIndex: "-1" }}>
          <Loader />
        </Box>
        <Box
          sx={{
            width: { xs: "0%", md: "25%" , p:1,},
            display: { xs: "none", sm: "none", md: "block" },
          }}
        >
         <h3>Desktop view is under development please have a look at mobile view.</h3>
        </Box>
      </Box>
      <Box
        sx={{
          width: { xs: "100%", md: "0%" },
          display: { xs: "block", sm: "none", md: "none" },
          mt: 7,
          alignItems: "center",
        }}
      >
        <Bottombar />
      </Box>

      <Box
        sx={{
          width: { xs: "100%", md: "0%" },
          display: { xs: "block", sm: "none", md: "none" },
        }}
      >
        <Searchbtn />
      </Box>

    </Box>
  </ThemeProvider>
  
  );
};

export default Feed;
