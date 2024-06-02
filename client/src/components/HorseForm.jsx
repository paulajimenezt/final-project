import React, { useState } from "react";
import axios from "axios";
import "./HorseForm.scss";

const HorseForm = ({ onSubmit }) => {
  const [horse, setHorse] = useState({
    name: "",
    age: 0,
    breed: "",
    gender: "Male",
    color: "",
    owner: "",
    birthDate: undefined,
    lastCheckedDate: undefined,
    weight: 0,
    height: 0,
    status: "healthy",
    pregnancyDate: undefined,
  });

  const handleChange = (event) => {
    setHorse({
      ...horse,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${import.meta.env.VITE_API_URL}/horses`, horse)
      .then((response) => onSubmit(response.data))
      .catch((error) => console.error("Error creating horse:", error));
  };

  return (
    <div className="horse-form">
      <h2>Create New Horse</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:{" "}
          <input
            type="text"
            autoComplete="given-name"
            name="name"
            value={horse.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Gender:{" "}
          <select name="gender" value={horse.gender} onChange={handleChange}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </label>
        <label>
          Color:{" "}
          <input
            type="text"
            name="color"
            value={horse.color}
            onChange={handleChange}
          />
        </label>
        <label>
          Owner:{" "}
          <input
            type="text"
            name="owner"
            value={horse.owner}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Birth Date:{" "}
          <input
            type="date"
            name="birthDate"
            value={horse.birthDate}
            onChange={handleChange}
          />
        </label>
        <label>
          Last Checked Date:{" "}
          <input
            type="date"
            name="lastCheckedDate"
            value={horse.lastCheckedDate}
            onChange={handleChange}
          />
        </label>
        <label>
          Weight:{" "}
          <input
            type="number"
            name="weight"
            value={horse.weight}
            onChange={handleChange}
          />
        </label>
        <label>
          Height:{" "}
          <input
            type="number"
            name="height"
            value={horse.height}
            onChange={handleChange}
          />
        </label>
        <label>
          Status:{" "}
          <select name="status" value={horse.status} onChange={handleChange}>
            <option value="healthy">Healthy</option>
            <option value="triage">Triage</option>
            <option value="hospitalized">Hospitalized</option>
            <option value="on recovery">On Recovery</option>
          </select>
        </label>
        <label>
          Pregnancy Date:{" "}
          <input
            type="date"
            name="pregnancyDate"
            value={horse.pregnancyDate}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default HorseForm;
