const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
require("dotenv").config();

function MongoUtils() {
  mu = {};
  mu.users = {};
  mu.tips = {};

  const ObjectId = mongodb.ObjectID;
  const DB_NAME = process.env.DB_NAME || "Error Database";
  let url = process.env.DB_URL || "mongodb://localhost:27017";

  // Connect to the DB
  mu.connect = () => {
    const options = { useUnifiedTopology: true, useNewUrlParser: true };
    const client = new MongoClient(url, options);
    return client.connect();
  };

  mu.tips.findAll = () => {
    return mu.connect().then((client) => {
      const tips = client.db(DB_NAME).collection("Tips");
      return tips
        .find({})
        .toArray()
        .finally(() => client.close());
    });
  };

  mu.tips.create = (tip) => {
    return mu.connect().then((client) => {
      const tips = client.db(DB_NAME).collection("Tips");
      // console.log("En mongo utils",tip);
      console.log({tip})
      return tips
        .insertOne(tip).finally(() => client.close());
    });
  };

  mu.users.create = (user) => {
    return mu.connect().then((client) => {
      const users = client.db(DB_NAME).collection("Users");
      // console.log("En mongo utils",user);
      console.log({user})
      return users
        .insertOne(user).finally(() => client.close());
    });
  };
  return mu;


}



module.exports = MongoUtils();
