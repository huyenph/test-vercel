const express = require("express");
const { NextFunction, Request, Response } = require("express");
const bodyParse = require("body-parser");
const database = require("./models");
const appRouter = require("./routers");

const app = express();

app.use(bodyParse.json());
app.use(
  (_: typeof Request, res: typeof Response, next: typeof NextFunction) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,PATCH");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
  }
);
app.use("/api", appRouter);
app.listen(process.env.PORT, () => {
  console.log(`App listening on port: ${process.env.PORT}`);
});

database.sequelize.sync();

module.exports = app;
