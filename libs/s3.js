const AWS = require("aws-sdk");
require("dotenv").config();

function AWSUtils() {
  const mu = {};

  AWS.config.update({ region: "us-east-1" });
  s3 = new AWS.S3({ apiVersion: "2006-03-01" });

  mu.upload = (fileName, fileContent) => {
    console.log("llegaAWS");
    const bucketParams = {
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: fileName,
      Body: fileContent,
      ACL: "public-read",
    };
    console.log("llegaAWS2");

    return new Promise((resolve, reject) => {
      console.log("llegaAWS3");
      s3.upload(bucketParams, function (err, data) {
        console.log("llegaAWS4");
        if (err) {
          console.log("llegaAWS5");
          throw err;
          //reject(err);
          //return;
        }
        console.log("Upload Success", data.Location);
        resolve(data);
      });
    });
  };
  return mu;
}

module.exports = AWSUtils();
