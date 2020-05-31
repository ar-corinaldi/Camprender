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

// router.get()

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

router.post("/tips", (req, res) => {
  res.json(req.params);
});

router.post("/registerUser", (req, res) => {
  mongo.users.create(req.body).then((data) => res.json(data));
});

<<<<<<< HEAD
router.post("/updateComment/:idTip/:telefono", function (req, res) {
  let comment = {}
  comment.comentario = req.body.comentario;
  comment.telefono = req.params.telefono;
  console.log(comment);
  mongo.tips
    .updateComment(comment, req.params.idTip)
    .then((data) => res.json(data));
=======
router.post("/updateComment/:idTip/:idUser", function(req, res){
  console.log(req.body);
  console.log(req.params);

  mongo.tips.updateComment(req.body, req.params.idTip, req.params.idUser).then((data)=> res.json(data));
>>>>>>> 1ce41b608988b69e7c5371b994b09611c724c969
});

module.exports = router;
