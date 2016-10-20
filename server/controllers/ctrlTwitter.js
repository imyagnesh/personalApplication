const Twitter = require('twitter');

const client = new Twitter({
  consumer_key: 'QiGHczqho6OXplcL0ASjOuzfT',
  consumer_secret: 'FJcKXvzH9ETRFYyAFQl1tPGq4Cwux7Kx550mbTf7ghGXp5RwdZ',
  access_token_key: '390084858-8DvRehofLTHtlsQkutloWBwVRozuZJsrBg9XD4jY',
  access_token_secret: 'Fuoms9naMrqh3plmjiNj7Hq19nIa6yBURZHVIXNJT8WF0',
});

module.exports.tweets = (req, res) => {
  getTweets('statuses/user_timeline').then(tweets => {
    res.status(200).send(tweets);
  }).catch(error => {
    res.status(400).send(error);
  });
};

function getTweets(endpoint) {
  return new Promise((resolve, reject) => {
    client.get(endpoint, (error, tweets) => {
      if (error) reject(error);
      resolve(tweets);
    });
  });
}
