const router = require("express").Router();
const tweets = require("./tweets.route");

router.use("/tweets", tweets);

module.exports = router;
