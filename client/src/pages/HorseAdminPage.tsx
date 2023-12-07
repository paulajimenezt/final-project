import React, { useContext, useEffect } from "react";
import { HorseContext } from "../context/HorseContext";

const HorseAdminPage = () => {
  const { horses } = useContext(HorseContext);

  useEffect(() => {
    // Fetch horse data here using the GET method
    // Update the horse state using setHorses
  }, []);

  return (
    <div>
      <h1>Horse Administration Page</h1>
      <HorseForm />
      <div>
        {horses.map((horse, index) => (
          <div key={index}>
            {/* Display horse card using the horse data */}
            {/* Example: */}
            <p>Name: {horse.name}</p>
            <p>Age: {horse.age}</p>
            {/* ... (other horse data) */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorseAdminPage;