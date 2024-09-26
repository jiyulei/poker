class Card {
  constructor(suit, rank) {
    this.suit = suit;
    this.rank = rank;
  }

  getCardInfo() {
    console.log("The card is: " + this.suit + " " + this.rank);
  }

  valueOf() {
    switch (this.rank) {
      case "A":
        return 14;
      case "K":
        return 13;
      case "Q":
        return 12;
      case "J":
        return 11;
      default:
        return this.rank;
    }
  }
  
}

export default Card;