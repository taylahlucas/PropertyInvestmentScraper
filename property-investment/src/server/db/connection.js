require('dotenv').config({ path: '../config.env '});
const { MongoClient } = require("mongodb");

const connectionString = process.env.ATLAS_URI;
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
var _db;
module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we have a good "db" object
      if (db)
      {
        _db = db.db("property_investment");
        console.log("Successfully connected to MongoDB."); 
      }
      return callback(err);
    });
  },
 
  getDb: function () {
    return _db;
  },
};