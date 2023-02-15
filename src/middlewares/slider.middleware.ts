const multer = require("multer");
const mdwConfig = require("../configs");

const imageFilter = (
  req: any,
  file: any,
  cb: (message: string | null, result: any) => void
) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb("Please upload only images.", false);
  }
};

var storage = multer.diskStorage({
  destination: (
    req: any,
    file: any,
    cb: (message: string | null, result: any) => void
  ) => {
    cb(null, mdwConfig.baseDir + "/resources/uploads/sliders/");
  },
  filename: (
    req: any,
    file: any,
    cb: (message: string | null, result: any) => void
  ) => {
    cb(null, `slider-${Date.now()}-${file.originalname}`);
  },
});

var sliderUploader = multer({ storage: storage, fileFilter: imageFilter });

module.exports = sliderUploader;
