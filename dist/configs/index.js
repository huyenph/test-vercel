"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
let baseDir = __dirname;
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
