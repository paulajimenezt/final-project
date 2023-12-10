import React, { useState } from "react";
import "./HorseCard.scss";

const Field = ({ label, value, isEditing, onChange }) => {
  return (
    <p>
      <label>{label}</label>:{" "}
      {isEditing ? (
        <input type="text" id={label} value={value} onChange={onChange} />
      ) : (
        value
      )}
    </p>
  );
};

const formatDate = (date) => {
  if (!date) {
    return "";
  }
  const options = { year: "numeric", month: "numeric", day: "numeric" };
  return new Date(date).toLocaleDateString(undefined, options);
};

const HorseCard = ({ horse }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedHorse, setEditedHorse] = useState(horse);
  const [shouldRender, setShouldRender] = useState(true);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedHorse(horse);
  };

  const handleSubmitEdit = () => {
    fetch(`http://localhost:3000/horses/${horse.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedHorse),
    })
      .then((response) => {
        if (response.ok) {
          setIsEditing(false);
        } else {
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this horse?"
    );
    if (confirmDelete) {
      fetch(`http://localhost:3000/horses/${horse.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            setShouldRender(false);
          } else {
            console.log(response.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return shouldRender ? (
    <div className="horse-card">
      <img src={editedHorse.image} />
      <h3>
        {isEditing ? (
          <input
            value={editedHorse.name}
            id="name"
            autoComplete="given-name"
            onChange={(e) =>
              setEditedHorse({ ...editedHorse, name: e.target.value })
            }
          />
        ) : (
          editedHorse.name
        )}
      </h3>
      <div className="card-text">
        <div className="field">
          <Field
            label="Gender"
            value={editedHorse.gender}
            isEditing={isEditing}
            onChange={(e) =>
              setEditedHorse({ ...editedHorse, gender: e.target.value })
            }
          />
          <Field
            label="Color"
            value={editedHorse.color}
            isEditing={isEditing}
            onChange={(e) =>
              setEditedHorse({ ...editedHorse, color: e.target.value })
            }
          />
          <Field
            label="Owner"
            value={editedHorse.owner}
            isEditing={isEditing}
            onChange={(e) =>
              setEditedHorse({ ...editedHorse, owner: e.target.value })
            }
          />
          <Field
            label="Birth Date"
            value={formatDate(editedHorse.birthDate)}
            isEditing={isEditing}
            onChange={(e) =>
              setEditedHorse({ ...editedHorse, birthDate: e.target.value })
            }
          />
          <Field
            label="Last Checked Date"
            value={formatDate(editedHorse.lastCheckedDate)}
            isEditing={isEditing}
            onChange={(e) =>
              setEditedHorse({
                ...editedHorse,
                lastCheckedDate: e.target.value,
              })
            }
          />
          <Field
            label="Weight"
            value={editedHorse.weight}
            isEditing={isEditing}
            onChange={(e) =>
              setEditedHorse({ ...editedHorse, weight: e.target.value })
            }
          />
          <Field
            label="Height"
            value={editedHorse.height}
            isEditing={isEditing}
            onChange={(e) =>
              setEditedHorse({ ...editedHorse, height: e.target.value })
            }
          />
          <Field
            label="Status"
            value={editedHorse.status}
            isEditing={isEditing}
            onChange={(e) =>
              setEditedHorse({ ...editedHorse, status: e.target.value })
            }
          />
          <Field
            label="Pregnancy Date"
            value={formatDate(editedHorse.pregnancyDate)}
            isEditing={isEditing}
            onChange={(e) =>
              setEditedHorse({ ...editedHorse, pregnancyDate: e.target.value })
            }
          />
          <div className="buttons">
            {isEditing ? (
              <>
                <button className="deleteButton" onClick={handleCancelEdit}>
                  Cancel
                </button>
                <button onClick={handleSubmitEdit}>Submit</button>
              </>
            ) : (
              <>
                <button onClick={handleEdit}>Edit</button>
                <button className="deleteButton" onClick={handleDelete}>
                  Delete
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default HorseCard;
