var express = require("express");
var jsonServer = require("json-server");
var cors = require("cors");
var server = express();
server.use(cors());
// ...

// You may want to mount JSON Server on a specific end-point, for example /api
// Optiona,l except if you want to have JSON Server defaults
// server.use('/api', jsonServer.defaults());
server.use("/", jsonServer.router("db.json"));

server.listen(3000);
