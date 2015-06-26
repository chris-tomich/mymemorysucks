var express = require("express");
var https = require("https");
var http = require("http");
var fs = require("fs");
var serveStatic = require("serve-static");

var options = {
    key: fs.readFileSync(__dirname + "\\cert\\dev.mymemorysucks.local.pem"),
    cert: fs.readFileSync(__dirname + "\\cert\\dev.mymemorysucks.local.cert"),
    passphrase: "thisismypassphrase"
};

var app = express();

app.use(serveStatic(__dirname));
http.createServer(app).listen(4000);
https.createServer(options, app).listen(4001);