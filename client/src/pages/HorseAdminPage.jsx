import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HorseForm from "../components/HorseForm";
import HorsesList from "../components/HorseList";
import "./HorseAdminPage.scss";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const HorsesPage = () => {
  const [horses, setHorses] = useState([]);
  const navigate = useNavigate();
  const [farmName, setFarmName] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/horses`)
      .then((response) => {
        setHorses(response.data);
      })
      .catch((error) => console.error("Error fetching horses:", error));

    const jwtToken = localStorage.getItem("jwtToken");
    if (jwtToken) {
      const decodedToken = jwtDecode(jwtToken);
      setFarmName(decodedToken.farmName);
    }
  }, []);

  const handleCreateHorse = (newHorse) => {
    setHorses((prevHorses) => [...prevHorses, newHorse]);
  };

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    navigate("/login");
  };

  return (
    <div className="horses-admin-page">
      <nav className="navbar">
        <img
          className="navbar-logo"
          src="../assets/horsetrack-logo-w.png"
        ></img>
        <div className="navbar-farm-name">{farmName}</div>
        <button className="navbar-logout-button" onClick={handleLogout}>
          Logout
        </button>
      </nav>

      <div className="horses-page">
        <HorseForm onSubmit={handleCreateHorse} />
        <HorsesList horses={horses} />
      </div>
    </div>
  );
};

export default HorsesPage;
