import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth, registerWithEmailAndPassword } from "../../firebase";
import "../../assets/css/register.css";
import { staticData } from "../../data/const";
import { images } from "../../assets/image";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading]);
  return (
    <div className="login-outer">
      <div className="login-left-outer">
        <img src={images.homePageImage} alt="" />
      </div>
      <div className="login-right-outer display-f-col">
        <div className="login-right-inner">
          <div className="display-f-col">
            <span className="bold fn-large">{staticData.createNewProfile}</span>
          </div>
          <div className="display-f-col">
            <span className="mb-1">{staticData.name}</span>
            <input
              type="text"
              className="text-box mb-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
            />
          </div>
          <div className="display-f-col">
            <span className="mb-1">{staticData.email}</span>
            <input
              type="text"
              className="text-box mb-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail Address"
            />
          </div>
          <div className="display-f-col mb-1">
            <span>{staticData.password}</span>
            <input
              type="password"
              className="text-box mb-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <div className="display-f-col">
            <span className="mb-1">{staticData.phoneNumber}</span>
            <input
              type="text"
              className="text-box mb-2"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Phone Number"
            />
          </div>
          {error}
          <button className="login-btn mt-3 mb-4" onClick={register}>
            {staticData.registerNow}
          </button>
          <div>
            {staticData.alreadyHaveAnAccount}{" "}
            <Link to="/" style={{ textDecoration: "none" }}>
              {staticData.login}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
