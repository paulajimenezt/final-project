module.exports = (sequelize, DataTypes) => {
  const Horse = sequelize.define("Horse", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
    },
    color: {
      type: DataTypes.STRING,
    },
    owner: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthDate: {
      type: DataTypes.DATE,
    },
    lastCheckedDate: {
      type: DataTypes.DATE,
    },
    weight: {
      type: DataTypes.FLOAT,
    },
    height: {
      type: DataTypes.FLOAT,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM("healthy", "triage", "hospitalized", "on recovery"),
    },
    pregnancyDate: {
      type: DataTypes.DATE,
      defaultValue: null,
    },
  });
  return Horse;
};
