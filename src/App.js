import React, { Component } from 'react';

import RegisterForm from './components/RegisterForm';
import CardList from './components/CardList';
import CategoryList from './components/CategoryList';
import './assets/index.css';
import './assets/App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cardList: [],
      categoryList: [],
    };
    this.deleteCard = this.deleteCard.bind(this);
    this.createCard = this.createCard.bind(this);
    this.addCategory = this.addCategory.bind(this);
  }

  createCard(title, body, category) {
    const newCard = { title, body, category };
    const newCardList = [...this.state.cardList, newCard];

    const newState = {
      ...this.state,
      cardList: newCardList,
    };

    this.setState(newState);
  }

  deleteCard (index) {
    const newCardList = this.state.cardList;

    newCardList.splice(index, 1);

    const newState = {
      ...this.state,
      cardList: newCardList
    }

    this.setState(newState);
  }

  addCategory(nameCategory) {
    const newCategoryList = [...this.state.categoryList, nameCategory];
    const newState = {
      ...this.state,
      categoryList: newCategoryList
    };
    this.setState(newState); 
  }

  render() {
    return (
      <section className="content">
        <RegisterForm
          createCard={this.createCard}
          list={this.state.categoryList}
        />
        <main className="content-main">
          <CategoryList
            addCategory={this.addCategory}
            list={this.state.categoryList}
          />
          <CardList 
            list={this.state.cardList}
            deleteCard={this.deleteCard}
          />
        </main>
      </section>
    );
  }
}
