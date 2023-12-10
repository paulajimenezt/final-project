const HorseModel = require("./models/horse-model");
const UserModel = require("./models/user-model")
const Sequelize = require("sequelize");
const config = require("./config");

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    ...config,
    logging: false,
  }
);

const models = {
  Horses: HorseModel(sequelize, Sequelize.DataTypes),
  Users: UserModel(sequelize, Sequelize.DataTypes),
};

Object.keys(models).forEach((modelName) => {
  if ("associate" in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
