import dotenv from "dotenv";

dotenv.config();

let baseDir: string = __dirname;

switch (process.env.NODE_ENV) {
  case "development":
    baseDir = baseDir.replace("/dist/configs", "");
    break;
  case "staging":
    baseDir = baseDir.replace("/dist/configs", "");
    break;
  case "production":
    baseDir = baseDir.replace("/dist/configs", "");
    break;
  default:
    baseDir = baseDir.replace("/src/configs", "");
    break;
}

module.exports = { baseDir };
