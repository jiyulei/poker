class Player {
  constructor(name, chips) {
    this.name = name;
    this.hands = [];
    this.chips = chips;
    this.currentBet = 0;
    this.isFolded = false;
  }

  receiveCards(cards) {
    this.hands = cards;
  }

  roundReset() {
    this.currentBet = 0;
    this.hands = [];
    this.isFolded = false;
  }

  call(previousPlayerBet) {
    const callAmount = previousPlayerBet - this.currentBet; 

    if(previousPlayerBet > this.chips) {
        throw new Error("Not enough chips!");
    }

    this.currentBet += callAmount;
    this.chips -= callAmount;
  }

  bet(amount) {
    if (amount > this.chips) {
      throw new Error("Not enough chips!");
    }
      this.currentBet += amount;
      this.chips -= amount;
  }

  allIn() {
    this.currentBet += this.chips;
    this.chips = 0;
  }

  fold() {
    this.isFolded = true;
  }
}

export default Player;

// const lei = new Player("lei", 1000);
// lei.bet(30);

// console.log(`leilei current bets: ${lei.currentBet}`);
// console.log(`leilei current chips: ${lei.chips}`);
// console.log(`is leilei folded?: ${lei.isFolded};`)

// lei.fold();

// console.log(`leilei current bets: ${lei.currentBet}`);
// console.log(`leilei current chips: ${lei.chips}`);
// console.log(`is leilei folded?: ${lei.isFolded};`);
