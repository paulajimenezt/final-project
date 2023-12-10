import { createContext, useState } from "react";

export const HorseContext = createContext({});

export const HorseProvider = () => {
  const [horses, setHorses] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    age: 0,
    breed: "",
    gender: "",
    color: "",
    owner: "",
    birthDate: "",
    lastCheckedDate: "",
    weight: 0,
    height: 0,
    image: "",
    status: "",
    pregnancyDate: "",
  });

  function addHorse(horseData) {
    setHorses((prevHorses) => [...prevHorses, horseData]);
  }

  const contextValue = {
    horses,
    formData,
    setFormData,
    addHorse,
  };

  return <HorseContext.Provider value={contextValue}></HorseContext.Provider>;
};
