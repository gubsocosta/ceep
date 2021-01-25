/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

import './style.css';
import { ReactComponent as DeleteSVG } from '../../assets/icons/delete.svg';

export default class CardItem extends Component {
  _deleteCard() {
    console.log('card deleted');
  }

  render() {
    return (
      <section className="card-item">
        <header className="card-item_header">
          <h3 className="card-item_title">{ this.props.title }</h3>
          <DeleteSVG onClick={this._deleteCard.bind(this)} />
        </header>
        <p className="card-item_body">
          {this.props.body}
        </p>
      </section>
    );
  }
}
