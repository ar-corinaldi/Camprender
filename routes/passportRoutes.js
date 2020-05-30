/**
 * const router = express.Router();
const AWS = require("../S3Lib/s3");

/*
Para insertar una imagen en el tip

router.post("/register", upload.single("image"), async (req, res) => {
    console.log("req.file", req.file);
    if (req.user) {
      req.body.user = req.user.username;
      req.body.availability = true;
      const fileName =
      req.user.username + "_" + req.file.originalname.replace(" ", "_");
      const fileContent = req.file.buffer;
      console.log("filename", fileName);
      const data = await AWS.upload(fileName, fileContent);
      req.body.image = data.Location;
      console.log(data.Location);
      mongo.feeds.insert(req.body).finally(() => res.redirect("/"));
    } 
    else res.redirect("/");
  });*/
