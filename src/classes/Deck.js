import Card from "./Card.js";
import Player from "./Player.js"

class Deck {
  constructor() {
    this.cards = [];
    this.initdecks();
  }
  // initial
  // if there are comparison like J >? Q might need to change this to number
  initdecks() {
    const suits = ["heart", "spade", "club", "diamond"];
    const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

    suits.forEach((suit) => {
      ranks.forEach((rank) => {
        this.cards.push(new Card(suit, rank));
      });
    });

    this.shuffle();
  }
  // shuffle
  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  // deal
  deal(num) {
    if (this.cards.length === 0) {
      console.error("No more cards in the deck.");
      return null;
    } else if (this.cards.length < num) {
      console.warn(
        `Not enough cars to deal. Dealing remaining cards ${this.cards.length} to player.`
      );
      const remainingCards = this.cards.splice(0, this.cards.length);
      return remainingCards;
    }

    const dealtCards = this.cards.splice(0, num);
    return dealtCards;
  }

  getDeckInfo() {
    this.cards.forEach((el) => console.log(el));
  }

  count() {
    return this.cards.length;
  }
}

export default Deck;

// ---- TEST CASE ----
// const deck = new Deck();
// const player1 = new Player("lei", 1000);
// const player2 = new Player("clm", 1000);

// player1.receiveCards(deck.deal(2));
// player2.receiveCards(deck.deal(2));

// console.log("player1 in hand--->", player1);
// console.log("player2 in hand--->", player2);

// console.log("-----current deck -----");
// console.log("<---deck count--->" , deck.count());

// deck.getDeckInfo();

