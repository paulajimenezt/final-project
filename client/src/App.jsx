import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import "./App.scss";
import LoginPage from "./pages/LoginPage";
import HorseAdminPage from "./pages/HorseAdminPage";

const Navigation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const jwtToken = localStorage.getItem("jwtToken");

    if (!jwtToken || jwtToken === undefined) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/horse-admin" element={<HorseAdminPage />} />
      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
};

const App = () => {
  return (
    <Router>
      <Navigation />
    </Router>
  );
};

export default App;
