class Card {
  constructor(suit, rank) {
    this.suit = suit;
    this.rank = rank;
  }

  getCardInfo() {
    console.log("The card is: " + this.suit + " " + this.rank);
  }
}

const card1 = new Card("spade", "ace");
card1.getCardInfo();
