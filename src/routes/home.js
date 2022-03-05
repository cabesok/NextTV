const express = require("express");
const router = express.Router();
//const productsController = require("../controllers_db/productsController")
//const home = require("../controllers/home");

router.get("/", (req, res) => res.render("home", {style: "home.css", title: "Home"}),);    


module.exports = router;