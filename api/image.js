require("dotenv").config();
const Image = require("./models/Image");

// ---------
// -Methods-
// ---------

async function saveImage(req, res, next) {
    const auth = req.header("Authentication");
    if (auth) {
        if (auth != "ca03849frhyw98ptrphajat8op9sd") {
            return res.status(401).json({ message: "Authentication Failed!" });
        }
    } else {
        return res
            .status(401)
            .json({ message: "Please specify authentication!" });
    }

    const image = new Image({
        data: req.file.buffer
    });

    image
        .save()
        .then(image => {
            res.status(200).send(process.env.RETURN_URL + image._id);
        })
        .catch(error => {
            console.error("Error saving image to database: " + error);
            res.status(400).json({ message: "Error saving!" });
        });
}

async function getImage(req, res, next) {
    Image.findById(req.params.image, (error, image) => {
        if (error || !image)
            return res.status(404).json({ message: "Cannot find Image!" });
        res.status(200).send({ image: image.data, time: image.createdAt });
    });
}

async function getImageRaw(req, res, next) {
    Image.findById(req.params.image, (error, image) => {
        if (error || !image)
            return res.status(404).json({ message: "Cannot find Image!" });
        let contentType;
        switch (
            Buffer.from(image.data)
                .toString("base64")
                .charAt(0)
        ) {
            case "/":
                contentType = "image/jpeg";
                break;
            case "i":
                contentType = "image/png";
                break;
            case "R":
                contentType = "image/gif";
                break;
            case "U":
                contentType = "image/webp";
                break;
        }
        res.status(200)
            .set("Content-Type", contentType)
            .send(image.data);
    });
}
// --------
// -Routes-
// --------

module.exports.saveImage = saveImage;
module.exports.getImage = getImage;
module.exports.getImageRaw = getImageRaw;
