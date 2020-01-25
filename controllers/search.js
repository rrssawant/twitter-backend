
require('dotenv').config()
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  bearer_token: process.env.TWITTER_BEARER_TOKEN
});

module.exports.searchData = (req, res, next) => {
    client.get('search/tweets', {q: decodeURIComponent(req.params.id),count: 20 }, function(error, tweets, response) {
        var dataArray =[];
         tweets.statuses.forEach(function(tweet) {
            //  console.log("tweet: " + JSON.stringify(tweet.user))
             dataArray.push({tweet : tweet.text})
         });
        return res.status(200).json({ status: true, data: dataArray });

      });
}


