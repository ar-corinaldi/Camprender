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
      console.log({ tip });
      return tips.insertOne(tip).finally(() => client.close());
    });
  };

  /**
   * Metodo para actualizar un tip. Todavia no está terminado.
   */
  mu.tips.update = (celular, tip) => {
    return mu.connect().then((client) => {
      const tips = client.db(DB_NAME).collection("Tips");
      // console.log("En mongo utils",tip);
      console.log({ tip });
      const query = { _id: ObjectId(roomId) };
      const update = {
        $set: {
          availability: updateCamps,
        },
      };
      console.log(update);
      return feeds
        .findOneAndUpdate(query, update)
        .catch((err) =>
          console.error(`Failed to find and update document: ${err}`)
        )
        .finally(() => client.close());
    });
  };

  mu.users.create = (user) => {
    return mu.connect().then((client) => {
      const users = client.db(DB_NAME).collection("Users");
      // console.log("En mongo utils",user);
      console.log({ user });
      return users.insertOne(user).finally(() => client.close());
    });
  };

  mu.tips.updateComment = (comment, _id) => {
    return mu.connect().then((client) => {
      const tips = client.db(DB_NAME).collection("Tips");
      tips.findOne().then((tip) => {
        tip.comentarios.push(comment);
        console.log("tip updated", tip);
        
        return tips
          .findOneAndUpdate({ _id: ObjectId(_id) }, { $set: { tip } })
          .finally(() => client.close());
      });
    });
  };
  return mu;
}

module.exports = MongoUtils();
