import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "../../assets/css/login.css";
import { staticData } from "../../data/const";
import { images } from "../../assets/image";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
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
            <span>{staticData.welComeBack}</span>
            <span className="bold fn-x-large">
              {staticData.loginToYourAccount}
            </span>
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
          {error}
          <button
            className="login-btn mt-3 mb-4"
            onClick={() => logInWithEmailAndPassword(email, password)}
          >
            {staticData.registerNow}
          </button>
          <div>
            {staticData.dontHaveAnAccount}{" "}
            <Link to="/register" style={{ textDecoration: "none" }}>
              {staticData.register}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
