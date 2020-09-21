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

router.post("/burgers", (req, res) => {
    burger.insertOne(["burger_name"], [req.body.burger_name], (result) => {
        res.status(200).end();
    });
});

router.put("/burger/:id", (req, res) => {
    const condition = "id= " + req.params.id;

    console.log("condition", condition);

    burger.updateOne(
        {
           devoured: req.body.devoured 
        },
        condition,
        (result) => {
            if (result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

module.exports = router;