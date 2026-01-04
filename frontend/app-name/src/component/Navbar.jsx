import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Search from "./Search";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/auth";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleLogout = () => {
    localStorage.clear();
    dispatch(logout()); 
    navigate("/login");
  };

  return (
    <div className="all">
      <div className="bb">
        <div className="logo">Teaching squad</div>

        <ul className="nav-links">
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/courses")}>Courses</li>
          <li onClick={() => navigate("/about")}>About us</li>
          {isLoggedIn && (
            <>
              <li onClick={() => navigate("/profile")}>Profile</li>
              <li onClick={() => navigate("/favourite")}>Favourite ❤️</li>
            </>
          )}
          <li>
            <Search />
          </li>
        </ul>

        <div className="auth-buttons">
          {isLoggedIn ? (
            <Button variant="danger" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <>
              <Button className="btn-btn" onClick={() => navigate("/login")}>Login</Button>
              <Button className="btn-btn1" onClick={() => navigate("/register")}>Register</Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
