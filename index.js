// Dependencies
require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");

const router = require("./network/routes");

// Creating aplication.
const app = express();
app.use(bodyParser.json());

// Routes
router(app);

// Port listener.
const port = (process.env.PORT || 3000);

app.listen(port, () => {
    console.log("http://localhost:" + port);
    console.log("htpp://192.168.18.203:" + port);
});