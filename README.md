# Ladder

> A light-weight Elo rating web app.

## Installing

Required technologies:
- node 0.12.x
- mongo
- browserify

```
$ git clone https://github.com/lambtron/ladder.git
$ cd ladder
$ mongod
$ make
```

## Deploy to Heroku

After you have cloned and went into the root of the directory:

```
$ heroku create
$ git push heroku master
$ heroku addons:add mongolab
$ heroku open
```

Or:

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Usage

### API Routes

#### GET /api/list

Get the list of all players in the database. This is a sample response:

```javascript
[
  {
    name: 'BeastLee',
    rating: 1500,
    createdAt: 'Sun Mar 22 2015 13:49:28 GMT-0700 (PDT)',
    gif: 'http://media.giphy.com/media/I5xVnGJRHZZf2/giphy.gif',
    games: 1
  },
  {
    name: 'DinnerNugget',
    rating: 1800,
    createdAt: 'Sun Mar 22 2015 13:49:28 GMT-0700 (PDT)',
    gif: 'http://media.giphy.com/media/I5xVnGJRHZZf2/giphy.gif',
    games: 2
  }
]
```

#### POST /api/create

Create a new player in the database. Content-type is application/json with sample body below. All players start with rating at 1500.

```javascript
{
  name: 'BeastLee'
}
```

#### POST /api/results

Create a new game result and update Elo ratings accordingly. Content type is application/json with sample body below.

```javascript
{
  winner: 'BeastLee',
  loser: 'DinnerNugget'
}
```

#### POST /api/remove/:name

Remove player from database with `name` as the key. The name is case sensitive.

## License (MIT)

    WWWWWW||WWWWWW
     W W W||W W W
          ||
        ( OO )__________
         /  |           \
        /o o|    MIT     \
        \___/||_||__||_|| *
             || ||  || ||
            _||_|| _||_||
           (__|__|(__|__|

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.