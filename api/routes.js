const express = require("express");
const multer = require("multer");
const upload = multer();

const router = express.Router();

// -Image-Uploads------------------------------------------------------

router
    .route("/image")
    .post(upload.single("image"), require("./image").saveImage);
router.route("/image/:image").get(require("./image").getImage);
router.route("/image/:image/raw").get(require("./image").getImageRaw);

module.exports = router;
