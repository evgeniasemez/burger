var express = require("express");
var routing = require("./controllers/burgers_controller");
const path = require("path");

var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(express.static('assets/css'));

const publicPath = path.join(__dirname, "/public");
app.use("/", express.static(publicPath));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/", routing);

app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
