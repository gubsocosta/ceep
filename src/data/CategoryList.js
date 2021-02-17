export default class CategoryList {
  constructor() {
    this.list = [];
    this._subscribers = [];
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

  addCategory(newCategory) {
    this.list.push(newCategory);
    this.notify();
  }
}