const routes = require('express').Router();
const connection = require("../../config");

routes.get("/:id", (req, res) => {
    connection.query("select * from persons where event_id=" + req.params.id, (err, result) => {
        if (err) return res.json({ status: "faild" });
        res.json(result);
    })
})

routes.post("/", (req, res) => {
    connection.query("insert into persons set ?", req.body, (err, result) => {
        if (err) return res.json({ status: "faild" });
        res.json(result);
    })
})

module.exports = routes;