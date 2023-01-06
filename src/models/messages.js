"use strict";
const { Model } = require("sequelize");
const users = require("./users");

module.exports = (sequelize, DataTypes) => {
  class Messages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Messages.belongsTo(users);
    }
  }
  Messages.init(
    {
      userIssuer: DataTypes.STRING,
      userRecivier: DataTypes.STRING,
      text: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Messages",
    }
  );
  return Messages;
};
