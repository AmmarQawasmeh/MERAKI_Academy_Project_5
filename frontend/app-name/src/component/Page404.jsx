import React from "react";
import Navbar from "./navbar";
import { Link } from "react-router-dom";
import "./page404.css";

const Page404 = () => {
  return (
    <>
      <Navbar />
      <div className="page404">
        <h1 className="page404__title">404</h1>
        <h2 className="page404__subtitle">Page Not Found</h2>
        <p className="page404__text">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        
      </div>
    </>
  );
};

export default Page404;
