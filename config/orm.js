var connection = require('./connection');

module.exports = {
    selectAll(callback) {
        connection.query("SELECT * FROM burgers", function (err, data) {
            console.log("select all");
            return callback(data);
        });
    },
    insertOne(burger_name, callback) {
        connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?,?)", [burger_name, false], function (err, result) {
            console.log("Add a burger");
            return callback(err, result);
        });
    },
    updateOne(burger_id, callback) {
        connection.query("UPDATE burgers SET devoured = true WHERE id = ?", [burger_id], function (err, result) {
            console.log("Update a burger");
            return callback(err, result);
        });
    }
}
// module.exports = orm;