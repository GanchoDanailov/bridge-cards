var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.set('views', __dirname + '/views');

app.get('/', function (req, res) {
  res.render('home');
});

app.get('/:suit', function (req, res) {
  var ranks = ['ace', 'king', 'queen', 'jack', 'ten', 'nine', 'eight', 'seven', 'six', 'five', 'four', 'three', 'two'];

  var cardsWithSuit = [];
  ranks.forEach(function (rank) {
    cardsWithSuit.push({
      suit: req.params.suit,
      rank: rank
    });
  });

  res.render('games', {
    cards: cardsWithSuit
  });
});

app.get('/:suit/:rank', function (req, res) {
  res.render('game', {
    card: {
      suit: req.params.suit,
      rank: req.params.rank
    }
  });
});

app.listen(3000);
