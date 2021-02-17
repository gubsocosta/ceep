import Card from "./Card";

export default class CardList {
  constructor() {
    this.list = [];
    this._subscribers = [];
  }

  addCard(title, body, category) {
    const newCard = new Card(title, body, category)
    this.list.push(newCard);
    this.notify();
  }

  removeCard(index) {
    this.list.splice(index, 1);
    this.notify();
  }

  subscribe(callback) {
    this._subscribers.push(callback);
  }

  unsubscribe(callback) {
    this._subscribers = this._subscribers.filter(item => item !== callback);
  }

  notify() {
    this._subscribers.forEach(subscriber => subscriber(this.list));
  }
}