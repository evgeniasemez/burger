var orm = require("../config/orm");

module.exports = {

    selectAll(callback) {
        orm.selectAll(callback);
    },

    submitBurger(burger_name, callback) {
        orm.insertOne(burger_name, callback);
    },

    devourBurger(burger_id, callback) {
        orm.updateOne(burger_id, callback);
    }
}

// module.exports = game;