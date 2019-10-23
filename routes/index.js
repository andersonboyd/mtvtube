const path = require("path");
const router = require("express").Router();
const api = require("./API");

router.use("/api", api);

router.use(function(req, res){
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;