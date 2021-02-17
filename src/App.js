import React, { Component } from 'react';

import CardListComponent from './components/CardList';
import CategoryListComponent from './components/CategoryList';
import RegisterFormComponent from './components/RegisterForm';
import CardList from './data/CardList';
import CategoryList from './data/CategoryList';

import './assets/index.css';
import './assets/App.css';

export default class App extends Component {
  constructor() {
    super();

    this.cardList = new CardList();
    this.categoryList = new CategoryList();
  }

  render() {
    return (
      <section className="content">
        <RegisterFormComponent
          categoryList={this.categoryList}
          addCard={this.cardList.addCard.bind(this.cardList)}
        />
        <main className="content-main">
          <CategoryListComponent
            categoryList={this.categoryList}
            addCategory={this.categoryList.addCategory.bind(this.categoryList)}
          />
          <CardListComponent 
            cardList={this.cardList}
            removeCard={this.cardList.removeCard.bind(this.cardList)}
          />
        </main>
      </section>
    );
  }
}
