var gamediv = document.getElementById("Matchinggame");

var cardsize = 100;
var cardspacing = 10;
var gameWidth = 4;
var gameHeight = 4;
var firstcard = null;
var secondcard = null;

createGrid(gameWidth, gameHeight);

function createGrid(h, v) {
  var a = [];
  for (var i = 0; i < (gameWidth * gameHeight) / 2; i++) {
    a.push(i);
    a.push(i);
  }

  var s = [];
  while (a.length > 0) {
    var r = Math.floor(Math.random() * a.length);
    s.push(a[r]);
    a.splice(r, 1);
  }

  for (var x = 0; x < h; x++) {
    for (var y = 0; y < v; y++) {
      createCard(s.pop(), x, y);
    }
  }
}

function createCard(cardNum, posX, posY) {
  var card = document.createElement("img");
  card.num = cardNum;
  card.src = "assets/img/cardback.png";
  card.style.position = "absolute";
  card.style.left = posX * (cardsize + cardspacing) + cardspacing + "px";
  card.style.top = posY * (cardsize + cardspacing) + cardspacing + "px";
  card.onclick = clickCard;
  gamediv.appendChild(card);
}

function clickCard(e) {
  var card = e.target;

  if (firstcard == null) {
      card.src = "assets/img/card" + card.num + ".png";
    firstcard = card;
  } else if (secondcard == null) {
      card.src = "assets/img/card" + card.num + ".png";
    secondcard = card;
    setTimeout(checkCards, 900);
  }
}
function checkCards() {
    if (firstcard.num == secondcard.num) {
      gamediv.removeChild(firstcard);
      gamediv.removeChild(secondcard);
    } else {
      firstcard.src = "assets/img/cardback.png";
      secondcard.src = "assets/img/cardback.png";
    }
    firstcard = null;
    secondcard = null;
}
