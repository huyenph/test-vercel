// const express = require("express");
// const { NextFunction, Request, Response } = require("express");
// const bodyParse = require("body-parser");
// const database = require("./models");
// const appRouter = require("./routers");

// const app = express();

// app.use(bodyParse.json());
// app.use(
//   (_: typeof Request, res: typeof Response, next: typeof NextFunction) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,PATCH");
//     res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//     next();
//   }
// );
// app.use("/", appRouter);
// app.listen(8080, () => {
//   console.log(`App listening on port: ${8080}`);
// });

// database.sequelize.sync();

// module.exports = app;

const express = require("express");
const { NextFunction, Request, Response } = require("express");

const app = express();
const port = process.env.PORT || 8080;

app.get("/", (_req: typeof Request, res: typeof Response) => {
  return res.send("Express Typescript on Vercel");
});

app.get("/ping", (_req: typeof Request, res: typeof Response) => {
  return res.send("pong 🏓");
});

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});
