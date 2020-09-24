const connection = require("./connection.js");

const orm = {
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(table, col, val, cb) {
        var queryString = "INSERT INTO ?? (??, devoured) VALUE (?, false)";
        connection.query(queryString, [table, col, val], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function(table, col, condition, cb) {
        var queryString = "UPDATE " + table;
        queryString += " SET";
        queryString += col;
        queryString += " WHERE ";
        queryString += condition;
        
        connection.query(queryString, [table, col, condition], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;