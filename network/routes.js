// Dependencies
const express = require("express");

const routes = (server) => {
    server.use("/home", (request, response) => {
        response.send("All right in route home")
    });

    server.use("/messages", (request, response) => {
        response.send("All right in route Messages");
    });

    server.use("/", (request, response) => {
        response.send("All right in route Start");
    });

};

module.exports = routes;