import React from "react";
import HorseCard from "./HorseCard";

const HorsesList = ({ horses }) => {
  return (
    <div>
      <h2>List of Horses</h2>
      {horses.map((horse) => (
        <HorseCard key={horse.id} horse={horse} />
      ))}
    </div>
  );
};

export default HorsesList;
