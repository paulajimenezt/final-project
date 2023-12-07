import React, { useContext, useState } from "react";
import { HorseContext } from "../context/HorseContext";

const HorseForm = () => {
  const [formData, setFormData] = useState<any>({}); // Initialize formData state
  const { addHorse } = useContext(HorseContext);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/horses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // Handle success
        console.log("Horse data submitted successfully!");
        addHorse(formData); // Add the horse to the context state
      } else {
        // Handle error
        console.error("Failed to submit horse data.");
      }
    } catch (error: any) {
      console.error("An error occurred while submitting horse data:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData: any) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Your form input fields here */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default HorseForm;
