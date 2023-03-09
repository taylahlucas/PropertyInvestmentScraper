// const { response } = require("express");
const express = require("express");

// Express router instance used to define our routes.
const propertiesRoutes = express.Router();

const dbo = require('../db/connection');

// Helps to convert the id from string to objectId for _id;
// const propertyAddress = require('mongodb').propertyAddress;

// Get list of properties
propertiesRoutes.route('/properties').get(function (req, res) {
  let dbConnect = dbo.getDb("property_investment");

  dbConnect
    .collection("properties")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// Get list of properties by props
// propertiesRoutes.route('/properties/:address&:price&:noBeds&:noBaths&:isFreehold&:isChainfree').get(function (req, res) {
//     console.log("HEREEE: ", req.params)

//   let dbConnect = dbo.getDb();
//   let query = { address: propertyAddress(req.params.address) };
//   console.log("QUERY : ", query)

  // dbConnect
  //   .collection("properties")
  //   .filter(query, function (err, result) {
  //     if (err) throw err;
  //     res.json(result);
  //   });
// });

// Create a new property in db
// propertiesRoutes.route('/properties/add').get(function (req, res) {
//   let dbConnect = dbo.getDb();
//   let data = {
//     id: req.body.id,
//     price: req.body.price, 
//     address: req.body.address,
//     description: req.body.description,
//     features: req.body.features,
//     tenure: req.body.tenure,
//     noBeds: req.body.no_beds,
//     noBaths: req.body.noBaths,
//     daysOTM: req.body.days_otm
//   };

//   dbConnect
//     .collection("properties")
//     .insertOne(data, function(err, res) {
//       if (err) throw err;
//       response.json(res);
//     })
// });

// Update a property by address
// propertiesRoutes.route('/properties:address').get(function (req, res) {
//   let dbConnect = dbo.getDb();
//   let query = { address: propertyAddress(req.params.address) };
//   let newData = {
//     $set: {
//       id: req.body.id,
//       price: req.body.price, 
//       address: req.body.address,
//       description: req.body.description,
//       features: req.body.features,
//       tenure: req.body.tenure,
//       noBeds: req.body.no_beds,
//       noBaths: req.body.noBaths,
//       daysOTM: req.body.days_otm
//     }
//   }

//   dbConnect
//     .collection("properties")
//     .updateOne(query, newData, function (err, result) {
//       if (err) throw err;
//       console.log("1 document updated: ", result)
//       res.json(result);
//     });
// });

// Delete a property
// propertiesRoutes.route('/:address').get((req, res) => {
//   let dbConnect = dbo.getDb();
//   let query = { address: propertyAddress(req.params.address) };

//   dbConnect
//     .collection("properties")
//     .deleteOne(query, function (err, obj) {
//       if (err) throw err;
//       console.log("1 document deleted: ", obj)
//       res.json(result);
//     });
// });

module.exports = propertiesRoutes;