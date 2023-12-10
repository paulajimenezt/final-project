import React from "react";
import HorseCard from "./HorseCard";
import "./HorseList.scss";

const HorsesList = ({ horses }) => {
  return (
    <div className="horse-list">
      <h2>Horses</h2>
      <div className="cards">
        {horses.map((horse) => (
          <HorseCard key={horse.id} horse={horse} />
        ))}
      </div>
    </div>
  );
};

export default HorsesList;
