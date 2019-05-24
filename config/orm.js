var connection = require('./connection');

module.exports = {
    selectAll(callback) {
        connection.query("SELECT * FROM burgers", function (err, data) {
            console.log("select all");
            return callback(data);
        });
    },
    insertOne() {
        console.log("insert One");
    },
    updateOne() {
        console.log("update One");
    }
}
// module.exports = orm;