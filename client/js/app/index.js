/** @jsx dom */

/**
 * Module dependencies.
 */

import {component,dom} from '../lib/deku/index.js';
import Player from '../player/index.js';
import Button from '../button/index.js';
import Game from '../game/index.js';
import List from '../list/index.js';

/**
 * Constants.
 */

const request = require('superagent');

/**
 * Define `App`.
 */

var App = component();

/**
 * Export `App`.
 */

export default App;

/**
 * After mount.
 */

App.prototype.afterMount = function(el, props, state) {
  var setState = this.setState.bind(this);
  var url = '/api/list';

  // Sort by rating
  function sortByRating(a, b) {
    return a.rating > b.rating ? -1 : 1;
  }

  request.get(url).end(function(err, res) {
    var list = res.body || [];
    setState({ list: list.sort(sortByRating) });
  });
};

/**
 * Render `App`.
 */

App.prototype.render = function(props, state) {
  var list = state.list || [];

  return (
    <div style='font-size: 1.2em'>
      <div class='container' style='padding-bottom: 150px;'>
        <div class='row' style='margin-top: 10px'>
          <div class='col-xs-12'>
            <List list={list} />
          </div>
        </div>
      </div>
      <footer style='position: fixed; bottom: 0px; width: 100%; padding: 10px; background-color: white; border-top: 1px solid #efefef;'>
        <div class='container'>
          <div class='row' style='margin-bottom: 15px;'>
            <Player visible={true} />
          </div>
          <div class='row'>
            <Game list={list} visible={true} />
          </div>
        </div>
      </footer>
    </div>
  );
};
