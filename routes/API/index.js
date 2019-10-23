const router = require("express").Router();
const api = require("./API");

router.use("/", api);

module.exports = router;