"use strict";
const sliderController = require("../controllers/slider.controller");
const sliderMiddleware = require("../middlewares/slider.middleware");
const router = require("express").Router();
router.post("/slider", sliderMiddleware.single("file"), sliderController.uploadSlider);
module.exports = router;
