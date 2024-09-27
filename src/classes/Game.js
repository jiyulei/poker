import Deck from "./Deck.js";
import Player from "./Player.js";

class Game {
  constructor(maxplayer = 9, smallBlind, bigBlind, players) {
    this.deck = new Deck();
    this.maxPlayer = maxplayer;
    this.smallBlind = smallBlind;
    this.bigBlind = bigBlind;
    this.pot = 0;
    this.players = players;
    this.communityCards = [];
    this.state = 0; // preflop: 0 , flop: 1, turn: 2, river: 3
    this.roles = [];
  }

  dealHands() {
    this.players.forEach((player) => {
      player.receiveCards(this.deck.deal(2));
    });
  }

  setRoles() {
    if (this.players.length === 2) {
      this.roles.push(["BTN/SB", "BB"]);
    } else {
      // players > 3
      this.roles[("BTN", "SB", "BB")];

      for (let i = 0; i < playerNumber - 3; i++) {
        this.roles.push([`UTG+${i}`]);
      }
    }
  }

  rotateRoles() {
    this.roles.push(this.roles.shift());
  }

  placeBet() {
    // TODO: each players should place bet, then state++
    this.state += 1;
  }

  startGame() {
    this.deck.shuffle();
    this.dealHands();
  }


  dealCommunityCards() {
    if (this.state === 1) {
      const dealtCards = this.deck.deal(3);

      this.communityCards.push(...dealtCards);
    } else {
      const dealtCards = this.deck.deal(1);

      this.communityCards.push(...dealtCards);
    }
  }
}

// -------Test Case-------

const player1 = new Player("lei", 1000);
const player2 = new Player("clm", 1000);
const players = [player1, player2];

const game = new Game(2, 5, 10, players);
// console.log("game: ", game);
game.startGame();
console.log(player1.name + "'s hand: ", player1.hands);
console.log(player2.name + "'s hand: ", player2.hands);

game.placeBet();
game.dealCommunityCards();
console.log("------- common -------", game.communityCards);
game.placeBet();
game.dealCommunityCards();
console.log("------- common -------", game.communityCards);
game.placeBet();
game.dealCommunityCards();
console.log("------- common -------", game.communityCards);