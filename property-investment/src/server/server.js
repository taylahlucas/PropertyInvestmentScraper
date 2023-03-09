const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config({ path: './config.env '});
const port = process.env.PORT || 27017;

app.use(cors());
app.use(express.json())
app.use(require('./routes/properties'));

// Get driver connection
const dbo = require('./db/connection');

app.listen(port, () => {
  // Connect to database
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});