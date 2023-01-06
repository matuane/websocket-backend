"use strict";
const { Model } = require("sequelize");
const messages = require("./messages");
const sessions = require("./sessions");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.hasMany(messages, {
        foreignKey: "userIssuer",
      });

      Users.hasOne(sessions, {
        foreignKey: "userID",
      });
    }
  }
  Users.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      user: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Users",
    }
  );
  return Users;
};
