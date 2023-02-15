"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const fs = require("fs");
const db = require("../models");
const config = require("../configs");
const Slider = db.sliders;
const uploadSlider = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.file === undefined) {
            return res
                .status(200)
                .send({ success: false, message: "You must select a file." });
        }
        Slider.create({
            type: req.file.mimetype,
            name: req.file.originalname,
            data: fs.readFileSync(config.baseDir + "/resources/uploads/sliders/" + req.file.filename),
        }).then((image) => {
            fs.writeFileSync(config.baseDir + "/resources/tmp/sliders/" + image.name, image.data);
            return res
                .status(200)
                .send({ success: true, message: "File has been uploaded." });
        });
    }
    catch (error) {
        return res.send(`Error when trying upload images: ${error}`);
    }
});
module.exports = { uploadSlider };
