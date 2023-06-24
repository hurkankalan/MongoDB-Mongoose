const router = require("express").Router();
const {
  allTweets,
  oneTweet,
  createTweet,
  updateTweet,
  deleteTweet,
} = require("../controllers/tweets.controller");

router.get("/", allTweets);
router.get("/:tweetId", oneTweet);
router.post("/", createTweet);
router.put("/:tweetId", updateTweet);
router.delete("/:tweetId", deleteTweet);

module.exports = router;
