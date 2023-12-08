import React, { useState } from "react";

const HorseForm = ({ onSubmit }) => {
  const [horse, setHorse] = useState({
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

  const handleChange = (event) => {
    setHorse({
      ...horse,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(horse);
    setHorse({
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
  };

  return (
    <div>
      <h2>Create New Horse</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            autoComplete="given-name"
            name="name"
            value={horse.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={horse.age}
            onChange={handleChange}
          />
        </label>
        <label>
          Breed:
          <input
            type="text"
            name="breed"
            value={horse.breed}
            onChange={handleChange}
          />
        </label>
        <label>
          Gender:
          <input
            type="text"
            name="gender"
            value={horse.gender}
            onChange={handleChange}
          />
        </label>
        <label>
          Color:
          <input
            type="text"
            name="color"
            value={horse.color}
            onChange={handleChange}
          />
        </label>
        <label>
          Owner:
          <input
            type="text"
            name="owner"
            value={horse.owner}
            onChange={handleChange}
          />
        </label>
        <label>
          Birth Date:
          <input
            type="datetime-local"
            name="birthDate"
            value={horse.birthDate}
            onChange={handleChange}
          />
        </label>
        <label>
          Last Checked Date:
          <input
            type="datetime-local"
            name="lastCheckedDate"
            value={horse.lastCheckedDate}
            onChange={handleChange}
          />
        </label>
        <label>
          Weight:
          <input
            type="number"
            name="weight"
            value={horse.weight}
            onChange={handleChange}
          />
        </label>
        <label>
          Height:
          <input
            type="number"
            name="height"
            value={horse.height}
            onChange={handleChange}
          />
        </label>
        <label>
          Status:
          <input
            type="text"
            name="status"
            value={horse.status}
            onChange={handleChange}
          />
        </label>
        <label>
          Pregnancy Date:
          <input
            type="datetime-local"
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
