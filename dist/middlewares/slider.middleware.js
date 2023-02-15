"use strict";
const multer = require("multer");
const mdwConfig = require("../configs");
const imageFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
        cb(null, true);
    }
    else {
        cb("Please upload only images.", false);
    }
};
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, mdwConfig.baseDir + "/resources/uploads/sliders/");
    },
    filename: (req, file, cb) => {
        cb(null, `slider-${Date.now()}-${file.originalname}`);
    },
});
var sliderUploader = multer({ storage: storage, fileFilter: imageFilter });
module.exports = sliderUploader;
