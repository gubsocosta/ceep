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
          list={this.categoryList.list}
          addCard={this.cardList.addCard}
        />
        <main className="content-main">
          <CategoryListComponent
            list={this.categoryList.list}
            addCategory={this.categoryList.addCategory}
          />
          <CardListComponent 
            list={this.cardList.list}
            removeCard={this.cardList.removeCard}
          />
        </main>
      </section>
    );
  }
}
