// Requirex the connection to the database from the connection module
const connection = require("./connection.js");

// Creates functions to be used for each burger option (get all, create, and update status)
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
        const parts = col.split("=");
        const cond = condition.split("=");

        const val1 = parts[1] === "true";
        const val2 = parseInt(cond[1]);


        var queryString = "UPDATE ?? SET ??=? WHERE ??=?";
        connection.query(queryString, [table, parts[0], val1, cond[0], val2], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    }
};

// Exports ORM as a module
module.exports = orm;