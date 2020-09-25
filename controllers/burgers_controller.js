// Requires express and router
const express = require("express");
const router = express.Router();

// Requires burger.js which houses the functions with hard-coded table name
const burger = require("../models/burger.js");

// Creates main "/" route to serve as a display for all burgers logged in database
router.get("/", (req, res) => {
    burger.selectAll((data) => {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

// Creates API root to insert a new burger into the database
router.post("/api/burgers", (req, res) => {
    burger.insertOne("burger_name", req.body.burger_name, (result) => {
        res.status(200).end();
    });
});

// Creates API root to update a burger's 'devoured' status on the website
router.put("/api/burgers/:id", (req, res) => {
    const condition = "id=" + req.params.id;
    const col = "devoured=" + req.body.devoured;

    burger.updateOne(col, condition, (result) => {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
        }
    );
});

// Exports as a module
module.exports = router;