// Dependencies
require("dotenv").config();
const express = require("express");

// Creating aplication.
const app = express();

// Routes
app.use("/:id", (request, response) => {
    response.send("All right, ID:" + request.params.id);
});

// Ready
const port = (process.env.PORT || 3000);

app.listen(port, () => {
    console.log("http://localhost:" + port);
});