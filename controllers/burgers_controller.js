var express = require("express");
var burger = require("../models/burger");

var router = express.Router();

router.get("/burger", function (req, res) {
    return res.json(burger);
});

router.post("/burger", function (req, res) {
});
// need to check
router.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
    console.log("I am here");
});

module.exports = router;