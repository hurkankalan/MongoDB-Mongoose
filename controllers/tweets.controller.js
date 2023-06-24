const {
  getTweetsQueries,
  getTweetQueries,
  postTweetQueries,
  petTweetQueries,
  deleteTweetQueries,
} = require("../queries/tweets.queries");

exports.allTweets = async (req, res) => {
  try {
    const allTweet = await getTweetsQueries();
    res.status(200).json(allTweet);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err });
  }
};

exports.oneTweet = async (req, res) => {
  if (!req.params.tweetId) {
    res.status(400).send("The tweet id is missing from url");
  }

  try {
    const tweetId = req.params.tweetId;
    const tweet = await getTweetQueries(tweetId);
    res.status(200).json(tweet);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err });
  }
};

exports.createTweet = async (req, res) => {
  try {
    const body = req.body;
    const newTweet = await postTweetQueries(body);
    res.status(201).json(newTweet);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err });
  }
};

exports.updateTweet = async (req, res) => {
  if (!req.params.tweetId) {
    res.status(400).send("The tweet id is missing from url");
  }

  try {
    const body = req.body;
    const tweetId = req.params.tweetId;
    const updateTweet = await petTweetQueries(tweetId, body);
    res.status(201).json(updateTweet);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err });
  }
};

exports.deleteTweet = async (req, res) => {
  if (!req.params.tweetId) {
    res.status(400).send("The tweet id is missing from url");
  }

  try {
    const tweetId = req.params.tweetId;
    await deleteTweetQueries(tweetId);
    res.status(204);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err });
  }
};

exports.deleteTweet;
