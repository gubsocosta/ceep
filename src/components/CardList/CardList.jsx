import React, { Component } from 'react';

import CardItem from '../CardItem';
import './style.css';

export default class CardList extends Component {
  constructor(props) {
    super(props);

    this.state = {cardList: []};
    
    this._newCardList = this._newCardList.bind(this);
  }

  componentDidMount() {
    this.props.cardList.subscribe(this._newCardList);
  }

  componentWillUnmount() {
    this.props.cardList.unsubscribe(this._newCardList);
  }

  _newCardList(cardList) {
    this.setState({ ...this.state, cardList });
  };

  render() {
    return (
      <ul className="card-list">
        {
          this.state.cardList
            .map((item, index) => (
              <li key={index} className="card-list_item">
                <CardItem
                  index={index}
                  title={item.title}
                  body={item.body}
                  category={item.category}
                  removeCard={this.props.removeCard}
                />
              </li>
            ))
        }
      </ul>
    );
  }
}
