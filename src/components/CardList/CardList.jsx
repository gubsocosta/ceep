/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
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
                title={item.title}
                body={item.body}
              />
            </li>
          ))
        }
      </ul>
    );
  }
}
