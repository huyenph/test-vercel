import { DataTypes, Sequelize } from "sequelize";

module.exports = (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
  const Image = sequelize.define("Slider", {
    type: {
      type: dataTypes.STRING,
    },
    name: {
      type: dataTypes.STRING,
    },
    data: {
      type: dataTypes.BLOB("long"),
    },
  });
  return Image;
};
