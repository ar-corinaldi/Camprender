const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

function MongoUtils() {
  mu = {};
  mu.Users = {};
  mu.Tips = {};

  const ObjectId = mongodb.ObjectID;
  const DB_NAME = process.env.DB_NAME || "Error Database";
  let url = process.env.DB_URL || "mongodb://localhost:27017";

  // Connect to the DB
  mu.connect = () => {
    const options = { useUnifiedTopology: true, useNewUrlParser: true };
    const client = new MongoClient(url, options);
    return client.connect();
  };



  return mu;
}

module.exports = MongoUtils();
