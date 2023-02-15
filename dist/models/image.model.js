"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = (sequelize, dataTypes) => {
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
