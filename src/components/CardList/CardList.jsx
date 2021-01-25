import React, { Component } from 'react';

import CardItem from '../CardItem';
import './style.css';

export default class CardList extends Component {
  render() {
    return (
      <ul className="card-list">
        {
          this.props.list.map((item, index) => (
            <li key={index} className="card-list_item">
              <CardItem
                index={index}
                title={item.title}
                body={item.body}
                deleteCard={this.props.deleteCard}
              />
            </li>
          ))
        }
      </ul>
    );
  }
}
