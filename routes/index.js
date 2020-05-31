const express = require("express");
const router = express.Router();
const mongo = require("../libs/MongoUtils");
const AWS = require("../libs/s3");
const multer = require("multer");
const storage = multer.memoryStorage({
  destination: (req, file, cb) => {
    cb(null, "");
  },
});
const upload = multer({ storage: storage });

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/tips", (req, res) => {
  mongo.tips.findAll().then((data) => res.json(data));
});

router.post("/register", upload.single("image"), async (req, res) => {
  console.log("req.FILEEEE", req.file);
  req.body.comentarios = [];
  req.body.likes = 0;
  const tag = [];
  tag.push(req.body.tags);
  req.body.tags = tag;
  console.log(req.body);
  console.log("telefonooo", req.body.phoneRegister);
  console.log("imageee", req.body.image);

  /*
   */
  const fileName = req.body.phoneRegister; //+ "_" + req.body.image.replace(" ", "_");
  const fileContent = req.file.buffer;
  const data = await AWS.upload(fileName, fileContent);
  req.body.image = data.Location;
  console.log(req.body.image);
  console.log(data.Location);
  console.log("sale isa");
  /*
   */
  mongo.tips.create(req.body).then((data) => res.json(data));
});

router.post("/registerUser", (req, res) => {
  mongo.users.create(req.body).then((data) => res.json(data));
});
module.exports = router;
