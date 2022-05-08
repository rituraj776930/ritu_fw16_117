import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Todos from "./Todos";

const Home = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <Todos />
    </div>
  );
};

export default Home;
