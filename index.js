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
  var currentCard = {
    suit: req.params.suit,
    rank: req.params.rank
  };

  res.render('game', {
    card: currentCard,
    next: nextCard(currentCard),
    prev: prevCard(currentCard)
  });
});

var ranks = ['two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king', 'ace'];

function prevCard(currentCard) {
  var currentRankPossition = ranks.indexOf(currentCard.rank);
  var rankIndex = null;

  if (currentRankPossition === 0) {
    rankIndex = 12;
  }
  else {
    rankIndex = currentRankPossition - 1;
  }

  return {
    suit: currentCard.suit,
    rank: ranks[rankIndex]
  };
}

function nextCard(currentCard) {
  var currentRankPossition = ranks.indexOf(currentCard.rank);
  var rankIndex = null;

  if (currentRankPossition === 12) {
    rankIndex = 0;
  }
  else {
    rankIndex = currentRankPossition + 1;
  }

  return {
    suit: currentCard.suit,
    rank: ranks[rankIndex]
  };
}

app.listen(3000);
