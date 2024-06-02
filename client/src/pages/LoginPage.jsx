import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./LoginPage.scss";
import logo from "../assets/horsetrack-logo-w.png";

const LoginPage = () => {
  const navigate = useNavigate();
  const [isCreateAccount, setIsCreateAccount] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
    farmName: "",
  });

  const handleCreateAccount = (event) => {
    setIsCreateAccount(true);
  };

  const handleLogin = (event) => {
    setIsCreateAccount(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password, farmName } = user;
    const url = isCreateAccount
      ? `${import.meta.env.VITE_API_URL}/users/`
      : `${import.meta.env.VITE_API_URL}/auth/login`;
    const data = isCreateAccount
      ? { username, password, farmName }
      : { username, password };

    axios
      .post(url, data)
      .then((response) => {
        if (isCreateAccount) {
          setIsCreateAccount(false);
        } else {
          localStorage.setItem("jwtToken", response.data.Token);
          navigate("/horse-admin");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="login-page">
      <div className="login-form">
        <img src={logo} />
        {isCreateAccount ? (
          <form onSubmit={handleFormSubmit}>
            <label>
              Username{" "}
              <input
                type="text"
                name="username"
                value={user.username}
                required
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
            </label>
            <br />
            <label>
              Password{" "}
              <input
                type="password"
                name="password"
                value={user.password}
                required
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </label>
            <br />
            <label>
              Farm Name{" "}
              <input
                type="text"
                name="farmName"
                value={user.farmName}
                required
                onChange={(e) => setUser({ ...user, farmName: e.target.value })}
              />
            </label>
            <br />
            <button type="submit">Create Account</button>
            <br />
            <p>
              Already have an account? <Link onClick={handleLogin}>Log in</Link>{" "}
              instead
            </p>
          </form>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <label>
              Username{" "}
              <input
                type="text"
                name="username"
                value={user.username}
                required
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
            </label>
            <br />
            <label>
              Password{" "}
              <input
                type="password"
                name="password"
                value={user.password}
                required
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </label>
            <br />
            <button type="submit">Log in</button>
            <br />
            <Link onClick={handleCreateAccount}>Create Account</Link>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
