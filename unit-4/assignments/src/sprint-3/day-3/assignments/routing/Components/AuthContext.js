import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    let res = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      }),
    });
    let data = await res.json();

    setToken(data.token);
    navigate("/shoppingcart");
  };
  const handleLogout = () => {
    setToken("");
  };

  const value = { handleLogin, token, handleLogout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
