const Tweet = require("../models/tweets.model");

exports.getTweetsQueries = () => {
  return Tweet.find();
};

exports.getTweetQueries = (id) => {
  return Tweet.findOne({ _id: id });
};

exports.postTweetQueries = (tweet) => {
  const newTweet = new Tweet(tweet);
  return newTweet.save();
};

exports.petTweetQueries = (id, tweetInformations) => {
  return Tweet.findByIdAndUpdate(
    { _id: id },
    { content: tweetInformations.content },
    { runValidators: true }
  );
};

exports.deleteTweetQueries = (id) => {
  return Tweet.findByIdAndDelete({ _id: id });
};
