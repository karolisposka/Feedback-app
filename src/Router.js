import { Route, Routes, BrowserRouter } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
