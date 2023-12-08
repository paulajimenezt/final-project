import React, { useState, useEffect } from "react";
import axios from "axios";
import HorseForm from "../components/HorseForm";
import HorsesList from "../components/HorseList";

const HorsesPage = () => {
  const [horses, setHorses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/horses")
      .then((response) => {
        setHorses(response.data);
      })
      .catch((error) => console.error("Error fetching horses:", error));
  }, []);

  const handleCreateHorse = (newHorse) => {
    // Add the new horse to the list
    setHorses((prevHorses) => [...prevHorses, newHorse]);

    // POST API call to create a new horse
    axios
      .post("http://localhost:3000/horses", newHorse)
      .then((response) => console.log("New horse created:", response.data))
      .catch((error) => console.error("Error creating horse:", error));
  };

  return (
    <div>
      <HorseForm onSubmit={handleCreateHorse} />
      <HorsesList horses={horses} />
    </div>
  );
};

export default HorsesPage;
