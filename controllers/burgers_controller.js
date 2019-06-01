var express = require("express");
var burger = require("../models/burger");

var router = express.Router();



// Use Handlebars to render the main index.html page with the burgers in it.
router.get("/", function (req, res) {

    burger.selectAll(function (value) {
        console.log(value);
        var burgerNames = [];
        var eatenBurgers = [];
        value.forEach(function (element) {
            if (element.devoured) {
                eatenBurgers.push("Eaten Burger: " + element.burger_name);
            }
            else {
                burgerNames.push("Burger name: " + element.burger_name);
            }
        });
        res.render("index", { burger: burgerNames, eatenBurger: eatenBurgers });

    });

    // if (err) {
    //     return res.status(500).end();
    // }

});

// Create a new burger
router.put("/api/burger", function (req, res) {
    console.log(req.body);
    burger.submitBurger(req.body.name, function (err, result) {
        if (err) {
            console.log(err);
            return res.status(500).end();
        }

        // Send back the ID of the new burger
        res.json({ id: result.insertId });
        console.log(result);
    });
});

// Update a burger
// router.put("/api/plans/:id", function (req, res) {
//     connection.query("UPDATE burgers SET plan = ? WHERE id = ?", [req.body.plan, req.params.id], function (err, result) {
//         if (err) {
// If an error occurred, send a generic server failure
//     return res.status(500).end();
// }
// else if (result.changedRows === 0) {
//     // If no rows were changed, then the ID must not exist, so 404
//     return res.status(404).end();
// }
// res.status(200).end();

//     });
// });

// Delete a burger
// router.delete("/api/plans/:id", function (req, res) {
//     connection.query("DELETE FROM burgers WHERE id = ?", [req.params.id], function (err, result) {
//         if (err) {
//             // If an error occurred, send a generic server failure
//             return res.status(500).end();
//         }
//         else if (result.affectedRows === 0) {
//             // If no rows were changed, then the ID must not exist, so 404
//             return res.status(404).end();
//         }
//         res.status(200).end();

//     });
// });


module.exports = router;