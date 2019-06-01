var orm = require("../config/orm");

module.exports = {

    selectAll(callback) {
        orm.selectAll(callback);
    },

    submitBurger(burger_name, callback) {
        orm.insertOne(burger_name, callback);
    },

    devourBurger() {

    }
}

// module.exports = game;