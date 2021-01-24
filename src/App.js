import React, { Component } from 'react';

import CardList from './components/CardList';
import RegisterForm from './components/RegisterForm';
import './assets/index.css';
import './assets/App.css';

export default class App extends Component{
  constructor() {
    super();
    this.state = {
      list: []
    };
  }

  createCard(title, body) {
    const newCard = {title, body};
    const newList = [...this.state.list, newCard]
    
    const newState = {
      list: newList
    };

    this.setState(newState);
  }

  render() {
    return (
      <section className="content">
        <RegisterForm createCard={ this.createCard.bind(this) }/>
        <CardList list={ this.state.list } />
      </section>
    );
  }
}
