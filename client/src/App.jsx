import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.scss";
import LoginPage from "./pages/LoginPage";
import HorseAdminPage from "./pages/HorseAdminPage";

const App = () => {
  const navigate = useNavigate();

  const checkToken = () => {
    const jwtToken = localStorage.getItem("jwtToken");
    return jwtToken && jwtToken !== undefined;
  };

  useEffect(() => {
    const jwtToken = localStorage.getItem("jwtToken");
    if (!jwtToken || jwtToken === undefined) {
      navigate("/login");
    } else {
      navigate("/horse-admin");
    }
  }, [navigate]);

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/horse-admin" element={<HorseAdminPage />} />
      <Route
        path="*"
        element={checkToken() ? <HorseAdminPage /> : <LoginPage />}
      />
    </Routes>
  );
};

export default App;
