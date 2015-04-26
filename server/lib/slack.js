
/**
 * Module dependencies.
 */

var request = require('superagent');
var fmt = require('./fmt');

/**
 * Expose `Slack`.
 */

module.exports = Slack;

/**
 * Thunkified post.
 */

Slack.postGame = function *(game) {
  return yield post(fmt('%s (+%d) defeats %s (%d)\n', game.winner.name, game.winner.new - game.winner.old, game.loser.name, game.loser.new - game.loser.old));
};

/**
 * Helper function to post.
 */

function post(body) {
  var uri = 'https://hooks.slack.com/services/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';
  return function(fn) {
    request
      .post(uri)
      .send(JSON.stringify({ text: body }))
      .end(fn);
  };
};
