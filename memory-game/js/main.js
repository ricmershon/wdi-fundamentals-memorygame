const cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

let numCardsTurned = 0;
let cardsInPlay = [];
let cardElement;
let cardId;

function checkForMatch() {
	numCardsTurned += 1;
	document.getElementsByTagName('img')[cardId].setAttribute('src', cards[cardId].cardImage);
	console.log("User flipped " + cards[cardId].rank + " of " + cards[cardId].suit);
	console.log("Number of cards turned: " + numCardsTurned);
	if (numCardsTurned === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
			console.log("You found a match!")
		} else {
			alert("Sorry, try again");
			console.log("Sorry, try again")
		}
		numCardsTurned = 0;
	} 
}

function flipCard() {
	cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch();
}

function createBoard() {
	for (let i = 0; i < cards.length; i++) {
		cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementsByTagName('div')[0].appendChild(cardElement);
	}
}

createBoard();