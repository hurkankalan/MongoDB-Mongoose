const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tweetSchema = Schema({
  content: { type: String, maxlength: 250, minlength: 1, required: true },
});

const TweetModel = mongoose.model("tweets", tweetSchema);

module.exports = TweetModel;
