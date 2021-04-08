const routes = require('express').Router();
const connection = require("../../config");

routes.get("/", (req, res) => {
    connection.query("select * from events", (err, result) => {
        if (err) return res.json({ status: "faild" });
        res.json(result);
    })
})

routes.get("/:id", (req, res) => {
    connection.query("select * from events where id=" + req.params.id, (err, result) => {
        if (err) return res.json({ status: "faild", msg: err });
        res.json(result);
    })
})


routes.post("/", (req, res) => {
    console.log(req.body);
    connection.query("insert into events set ?", req.body, (err, result) => {
        if (err) return res.json({ status: "faild", msg: err });
        res.json(result);
    })
})

routes.delete('/:id', (req, res) => {
    connection.query("delete from events where id=" + req.params.id, (err, result) => {
        if (err) return res.json({ status: "failed", msg: err });
        res.json(result);
    })
})

module.exports = routes;