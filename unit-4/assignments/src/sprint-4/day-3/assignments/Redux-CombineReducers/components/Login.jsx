import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginUser } from "../auth/action";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isAuth, isLoading, isError } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }
  return isLoading ? (
    <div className="loading">
      <CircularProgress />
    </div>
  ) : (
    <div className="login_form">
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="mail">Email</label>
        <br />
        <input
          id="mail"
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="pass">Password</label>
        <br />
        <input
          id="pass"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      {isError ? (
        <Stack sx={{ width: "500px" }} spacing={2}>
          <Alert variant="outlined" severity="error">
            Wrong credentials
          </Alert>
        </Stack>
      ) : (
        ""
      )}
    </div>
  );
};

export default Login;
