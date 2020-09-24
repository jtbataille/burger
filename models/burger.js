const orm = require("../config/orm.js");

const burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", (res) => {
            cb(res);
        });
    },
    insertOne: function(col, val, cb) {
        orm.insertOne("burgers", col, val, (res) => {
            cb(res);
        });
    },
    updateOne: function(col, condition, cb) {
        orm.updateOne("burgers", col, condition, (res) => {
            cb(res);
        });
    }
};

module.exports = burger;