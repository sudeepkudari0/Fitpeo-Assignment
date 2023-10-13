import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, Box } from "@chakra-ui/react";
import theme from "./theme.jsx";
import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./Components/Products.jsx";
import "./main.css";
import Dashboard from "./Components/Dashboard.jsx";
import Sidebar from "./Components/Sidebar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    <Router>
      <Box
        display={"flex"}
        flexDirection={{ base: "column", md: "row", lg: "row", sm: "column" }}
      >
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/productS" element={<Products />} />
        </Routes>
      </Box>
    </Router>
  </ChakraProvider>
);
