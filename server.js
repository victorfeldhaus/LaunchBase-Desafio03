const express = require("express")
const nunjucks = require("nunjucks")
const cards = require("./data")

const server = express()

server.use(express.static('public'))


server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server
})

server.get("/", function(req, res) {

    return res.render("content", { items: cards })
})



server.get("/sobre", function(req, res) {
    return res.render("sobre")
})

server.get("/notfound", function(req, res) {
    return res.render("not-found")
})


server.use(function(req, res) {
    res.status(404).render("not-found");
  });



server.listen(5000, function() {
    console.log("server os running")
})