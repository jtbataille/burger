const connection = require("./connection.js");

const orm = {
    selectAll: function(tableInput) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], (err, result) => {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO ?? ";
        connection.query(queryString, [table, cols, vals], (err, result) => {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function(table, cols, condition, cb) {
        var queryString = "UPDATE ?? SET ?? WHERE ??";
        connection.query(queryString, [table, cols, condition], (err, result) => {
            if (err) throw err;
            console.log(result);
        });
    }
};

module.exports = orm;