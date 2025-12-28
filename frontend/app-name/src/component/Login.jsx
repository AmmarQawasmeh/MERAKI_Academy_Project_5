import React from "react";
import Navbar from "./navbar";

import { useNavigate } from "react-router-dom";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import ("./login.css")
const Login = () => {
  const navigate = useNavigate();
  return (<>
  <Navbar />
  <div className="login"> 
    
      
      <div>
         <DotLottieReact
      src="/file.lottie"
      loop
      autoplay
    />
    </div>
    <div className="login-container">
      
      <div className="login-box"><h1>Welcome back</h1>
      <h1>login</h1>
      <label>
        <span>Email</span>
        <br />
        <input type="email" placeholder="you@example.com" />
      </label>
      <br />
      <label>
        <span>Password</span>
        <br />
        <input type="password" placeholder="password" />
      </label>
      <br />
      <button>login</button>
      <br />
      <p className="terms">By continuing, you agree to our Terms and Privacy Policy.</p>
      <br />
      <p className="register-link">
       Don't have an account?{" "}
        <button
          onClick={() => {
            navigate("/register");
          }}
        >
          register
        </button>
      </p>
      </div>
      
    </div>
    
      </div>
      </>
    
      
   
  );
};

export default Login;
