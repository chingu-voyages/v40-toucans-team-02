import React, { useState } from "react";
import "./Auth.css";
import loginService from "../services/login";
import registerService from "../services/register";

const Auth = ({ setIsLoggedIn }) => {
  let [authMode, setAuthMode] = useState("signin");
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    console.log("sign in");
    const credentials = {
      username: username,
      password: password,
    };
    try {
      const user = await loginService.login(credentials);
      localStorage.setItem("CommuterPalAuthToken", user.token);
      setIsLoggedIn(true);
      setUsername("");
      setPassword("");
    } catch (error) {
      console.error(error);
    }
  };

  const registerHandler = async (e) => {
    e.preventDefault();
    console.log("register click");
    const credentials = {
      username: username,
      password: password,
      email: email,
    };
    try {
      await registerService.register(credentials);
      setUsername("");
      setPassword("");
      setAuthMode("signin");
    } catch (error) {
      console.error(error);
    }
  };

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={loginHandler}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>username</label>
              <input
                type="username"
                className="form-control mt-1"
                placeholder="Enter username"
                value={username}
                onChange={({ target }) => setUsername(target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={registerHandler}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Create an Account</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="email address"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>username</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="username"
              value={username}
              onChange={({ target }) => setUsername(target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Auth;
