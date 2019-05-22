var connection = require('./connection');
class orm {
    selectAll() {
        console.log("select all");
    }
    insertOne() {
        console.log("insert One");
    }
    updateOne() {
        console.log("update One");
    }
}
module.exports = orm;