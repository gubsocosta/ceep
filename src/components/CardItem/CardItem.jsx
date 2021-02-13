import React, { Component } from 'react';

import './style.css';
import { ReactComponent as DeleteSVG } from '../../assets/icons/delete.svg';

export default class CardItem extends Component {
  _deleteCard() {
    this.props.deleteCard(this.props.index);
  }

  render() {
    return (
      <section className="card-item">
        <header className="card-item_header">
          <h3 className="card-item_title">{this.props.title}</h3>
          <DeleteSVG 
            onClick={this._deleteCard.bind(this)}
          />
        </header>
        <p className="card-item_body">
          {this.props.body}
        </p>
      </section>
    );
  }
}
