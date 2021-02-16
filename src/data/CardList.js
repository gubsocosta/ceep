import Card from "./Card";

export default class CardList {
  constructor() {
    this.list = []
  }

  addCard(title, body, category) {
    const newCard = new Card(title, body, category)
    this.list.push(newCard);
  }

  removeCard(index) {
    this.list.splice(index, 1);
  }
}