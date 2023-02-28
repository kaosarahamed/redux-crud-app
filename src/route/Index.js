import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../nevbar/Navbar";
import AddBooks from "../pages/AddBooks";
import EditBooks from "../pages/EditBooks";
import Home from "../pages/Home";

function Index() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-books" element={<AddBooks />} />
        <Route path="/edit-book" element={<EditBooks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Index;
