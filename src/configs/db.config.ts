import dotenv from "dotenv";

dotenv.config();

module.exports = {
  HOST: process.env.HOST,
  USER: process.env.DB_USER,
  PASSWORD: process.env.PASSWORD,
  DB: process.env.DB,
  dialect: process.env.DIALECT,
  pool: {
    max: 5,
    min: 0,
    acquire: process.env.POOL_ACQUIRE,
    idle: process.env.POOL_IDLE,
  },
};
