import { createContext, useState } from "react";
import { Horse } from "../entities/horse";

export const HorseContext = createContext({});

export const HorseProvider = () => {
  const [horses, setHorses] = useState<Horse[]>([]);
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
    status: "",
    pregnancyDate: "",
  });

  function addHorse(horseData: Horse): void {
    setHorses((prevHorses: Horse[]) => [...prevHorses, horseData]);
  }

  const contextValue = {
    horses,
    formData,
    setFormData,
    addHorse,
  };

  return <HorseContext.Provider value={contextValue}></HorseContext.Provider>;
};
