const express = require("express");
const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", (req, res) => {
    burger.selectAll((data) => {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.insertOne("burger_name", req.body.burger_name, (result) => {
        res.status(200).end();
    });
});

router.put("/api/burgers/:id", (req, res) => {
    const condition = "id= " + req.params.id;
    const col = " devoured= " + req.body.devoured;

    console.log("condition", condition);
    console.log(col);

    burger.updateOne(col, condition, (result) => {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
        }
    );
});

module.exports = router;