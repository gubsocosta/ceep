import React, { Component } from 'react';

import CardList from './components/CardList';
import RegisterForm from './components/RegisterForm';
import './assets/index.css';
import './assets/App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
    };
  }

  createCard(title, body) {
    const newCard = { title, body };
    // eslint-disable-next-line react/destructuring-assignment
    const newList = [...this.state.list, newCard];

    const newState = {
      list: newList,
    };

    this.setState(newState);
  }

  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <section className="content">
        {/* eslint-disable-next-line react/jsx-no-bind */}
        <RegisterForm createCard={this.createCard.bind(this)} />
        {/* eslint-disable-next-line react/destructuring-assignment */}
        <CardList list={this.state.list} />
      </section>
    );
  }
}
