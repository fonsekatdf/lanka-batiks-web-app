import React, {useState} from 'react';
import "./LoginPopup.css";
import { asset } from "../../assets/assets";

const LoginPopup = ({setShowLogin}) => {

    const [currState, setCurrState] = useState("Login");

  return (
    <div className="login-popup">
        <form className="login-popup-container">
          <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={asset.cross_icon} alt="" />
          </div>
          <div className="login-popup-inputs">
            {currState === "Login" ? (<></>): (<input type="text" placeholder="Name" required />)}
            
            <input type="text" className="email" placeholder="Email" required />
            <input type="text" placeholder="Passsword" required />
          </div>
          <button>{currState === "Sign Up"? "Create Account" : "Login"}</button>
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By clicking on the checkbox, you agree to the terms and conditions.</p>
          </div>
          {currState === "Login" ? (
            <p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click Here</span></p>
          ) : (
            <p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login Here</span></p>
          )}
        </form>
      
    </div>
  );
}

export default LoginPopup;
