// Requires the ORM functions in the ORM module
const orm = require("../config/orm.js");

// Hardcodes the only table for each function, leaving remaining variables dyanmic
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

// Exports as a module
module.exports = burger;