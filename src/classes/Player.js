class Player {
  constructor(name, chips) {
    this.name = name;
    this.hands = [];
    this.chips = chips;
    this.currentBet = 0;
    this.isFolded = false;
  }

  call(previousPlayerBet) {
    if(previousPlayerBet > this.chips) {
        throw new Error("Not enough chips!");
    }
    this.currentBet += previousPlayerBet;
    this.chips -= previousPlayerBet;
  }

  bet(amount) {
    if (previousPlayerBet > this.chips) {
      throw new Error("Not enough chips!");
    }
      this.currentBet += amount;
      this.chips -= amount;
  }

  allIn() {
    this.currentBet += chips;
    this.chips = 0;
  }

  fold() {
    this.isFolded = true;
  }
}
