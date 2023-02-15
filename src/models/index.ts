const dbConfig = require("../configs/db.config");
const { Sequelize } = require("sequelize");

interface MySqlDbProps {
  sequelize: typeof Sequelize;
  sliders: any;
}

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  dialectModule: require("mysql2"),
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const mysqlDb: MySqlDbProps = {
  sequelize: sequelize,
  sliders: require("./image.model")(sequelize, Sequelize),
};

module.exports = mysqlDb;
