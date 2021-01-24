import React, { Component } from 'react';

import CardItem from '../CardItem';
import './style.css';

export default class CardList extends Component {
  render() {
    return(
      <ul className="card-list">
        { 
          this.props.list.map((item, index) => {
            return(
              <li key={ index } className="card-list_item">
                <CardItem 
                  title={ item.title }
                  body={ item.body }
                />
              </li>
            );
          })
        }
      </ul>
    );
  }
}
