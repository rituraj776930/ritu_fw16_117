import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <h1 className="text-gray-900 font-medium text-6xl title-font mb-4">
              <span className="text-indigo-600">404 </span>Page Not Found
            </h1>
            <p className="leading-relaxed text-lg mb-4">
              Please check the URL in the address bar and try again.
            </p>
            <button
              className="inline-block text-center cursor-pointer bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700 mx-2"
              onClick={() => {
                navigate("/");
              }}
            >
              Go Back Home
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error;
