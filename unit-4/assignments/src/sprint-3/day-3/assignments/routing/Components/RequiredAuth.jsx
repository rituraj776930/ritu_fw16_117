import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export const RequiredAuth = ({ children }) => {
  const { token } = useContext(AuthContext);
  //   get the token from auth context and if token exists return the children otherwise return the follwoing
  return token ? (
    children
  ) : (
    <div className="h-72 w-full flex items-center justify-center">
      <h3 className="mt-20 text-center text-4xl">
        Please
        <Link to="/login" className="text-indigo-600 mx-4">
          login
        </Link>
        to access this page
      </h3>
    </div>
  );
};
