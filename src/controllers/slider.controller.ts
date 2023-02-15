const fs = require("fs");
const db = require("../models");
const config = require("../configs");

const Slider = db.sliders;

const uploadSlider = async (req: any, res: any) => {
  try {
    if (req.file === undefined) {
      return res
        .status(200)
        .send({ success: false, message: "You must select a file." });
    }
    Slider.create({
      type: req.file.mimetype,
      name: req.file.originalname,
      data: fs.readFileSync(
        config.baseDir + "/resources/uploads/sliders/" + req.file.filename
      ),
    }).then((image: any) => {
      fs.writeFileSync(
        config.baseDir + "/resources/tmp/sliders/" + image.name,
        image.data
      );
      return res
        .status(200)
        .send({ success: true, message: "File has been uploaded." });
    });
  } catch (error) {
    return res.send(`Error when trying upload images: ${error}`);
  }
};

module.exports = { uploadSlider };
