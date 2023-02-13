import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Input from "../component/input";
import SideBar from "../component/SideBar";
import Todo from "../component/Todo";
import Login from "../component/login";
import Protactiveroutes from "./protectiveRoutes";
import Deportment from "../component/deportment";


const Approutes = () => {
  return (
    <>
      <Router>
        <SideBar />
        <Routes>
          <Route element={<Login />} path="/" />
          <Route element={<Protactiveroutes />} >
          <Route element={<Input />} out path="/Input" />
          <Route element={<Deportment />} out path="/Deportment" />
          <Route element={<Todo />} path="/Todo" />
          </Route>
      
        </Routes>
      </Router>
    </>
  );
};

export default Approutes;
