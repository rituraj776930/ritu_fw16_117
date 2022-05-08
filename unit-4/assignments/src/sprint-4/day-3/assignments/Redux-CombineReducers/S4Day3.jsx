import React from "react";
import { Provider } from "react-redux";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import IndividualTodo from "./components/IndividualTodo";
import Login from "./components/Login";
import { store } from "./store";

const S4Day3 = () => {
  return (
    <div>
      <Provider store={store}>
        <nav>
          <NavLink to={"/"}>TODO APP</NavLink>
          <NavLink to={"/"}>Tasks</NavLink>
          <NavLink to={"/login"}>Login</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/todo/:id" element={<IndividualTodo />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Provider>
    </div>
  );
};

export default S4Day3;
