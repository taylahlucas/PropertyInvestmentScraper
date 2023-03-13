// require('dotenv').config({ path: './config.env '});
const Express = require("express");
var cors = require('cors');
const fs = require('fs');
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const { spawn } = require('child_process');
const { Logger } = require("mongodb");
// TODO: Hide password
const CONNECTION_URL = 'mongodb+srv://taylahlucas:QnKczVVUaXWkHjQx@propertyinvestment.ifhbpdi.mongodb.net/?retryWrites=true&w=majority';
const DATABASE_NAME = 'property_investment'

// https://nordicapis.com/building-a-restful-api-using-node-js-and-mongodb/
var app = Express();
app.use(cors());
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
var database, collection;

app.listen(5006, () => {
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
        if (error) {
            throw error;
        };
        database = client.db(DATABASE_NAME);
        collection = database.collection("properties");

        console.log("HERE: Connected to " + DATABASE_NAME + "!")
    });
});

// Get properties based on search parameters
app.get("/properties/:address&:price&:noBeds&:noBaths&:isFreehold&:isChainfree", (req, res) => {
    // Run properties spider
    const python = spawn('python', ['./scrapers/run_property_spider.py', JSON.stringify(req.params)]);
    // Get results from json file
    python.stdout.on('data', () => {
        fs.readFile('properties-result.json', 'utf-8', (err, results) => {
            if (err) throw err
            var properties = JSON.parse(results)
            return res.send(properties);
         })
    });

    python.stderr.on('data', (data) => {
        console.error(data.toString())
    });
    python.on('exit', (code) => {
        console.log("Child exited with code" + code)
    });
});

// Get rental prices of particular location with min. no of beds
app.get("/rental_prices/:address&:noBeds", (req, res) => {
    // Run rental prices spider
    const python = spawn('python', ['./scrapers/run_rental_prices_spider.py', JSON.stringify(req.params)]);
    // Get results from json file
    python.stdout.on('data', () => {
        fs.readFile('rental-prices-result.json', 'utf-8', (err, results) => {
            if (err) throw err;
            var rental_results = JSON.parse(results)
            if (results == []) {
                return res.send([])
            }
            else {
                return res.send(rental_results)
            }
        });
    });

    python.stderr.on('data', (data) => {
        console.error(data.toString())
    });
    python.on('exit', (code) => {
        console.log("Child exited with code" + code)
    });
});

// Get price history summary of area
// app.get("/price_history/:address", (req, res) => {
//     // Run price history spider
//     const python = spawn('python', ['./scrapers/run_price_history_spider.py', JSON.stringify(req.params)]);
//     // Get results from db
//     python.stdout.on('data', (data) => {
//         fs.readFile('price-history-result.json', 'utf-8', (err, results) => {
//             if (err) throw err;
//             var price_history_results = JSON.parse(results)
//             if (results == []) {
//                 return res.send([])
//             }
//             else {
//                 return res.send(price_history_results)
//             }
//         });
//     });

//     python.stderr.on('data', (data) => {
//         console.error(data.toString())
//     });
//     python.on('exit', (code) => {
//         console.log("Child exited with code" + code)
//     });
// });