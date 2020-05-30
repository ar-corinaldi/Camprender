const express = require("express");
const router = express.Router();
const mongo = require("../libs/MongoUtils");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/tips", (req, res) => {
  mongo.tips.findAll().then((data) => res.json(data));
});

router.post("/register", (req, res) => {
  req.body.comentarios = [];
  req.body.likes = 0;
  const tag = [];
  tag.push(req.body.tags);
  req.body.tags = tag;
  console.log(req.body);
  req.body.image = "https://s3.amazonaws.com/elcomun/imagenes/1517526198.jpg";
  mongo.tips.create(req.body).then(data => res.json(data));
});
module.exports = router;
