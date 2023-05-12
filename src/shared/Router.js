import React from "react";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
