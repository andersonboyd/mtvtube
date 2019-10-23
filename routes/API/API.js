const router = require("express").Router();
const searchController = require("../../controller/search.js");

router.route("/search/:query")
    .get(function(req, res, next){
        console.log("hit search route");
        next();
    }, searchController.search);

module.exports = router;