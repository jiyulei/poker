import Deck from "./Deck.js";
import Player from "./Player.js";

class Game {
  constructor(maxplayer = 9, smallBlind, bigBlind, players) {
    this.deck = new Deck();
    this.maxPlayer = maxplayer;
    this.smallBlind = smallBlind;
    this.bigBlind = bigBlind;
    this.pot = 0;
    this.inGamePlayers = players;
    this.communityCards = [];
  }

  startGame() {}
}

const player1 = new Player("lei", 1000);
const player2 = new Player("clm", 1000);
const players = [player1, player2];

console.log("players: ", players);


const game = new Game(2, 5, 10, players);
console.log("game: ", game.bigBlind);
