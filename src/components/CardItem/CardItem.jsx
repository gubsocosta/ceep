/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

import './style.css';
import { ReactComponent as DeleteSVG } from '../../assets/icons/delete.svg';

export default class CardItem extends Component {
  render() {
    return (
      <section className="card-item">
        <header className="card-item_header">
          <h3 className="card-item_title">{ this.props.title }</h3>
          <DeleteSVG />
        </header>
        <p className="card-item_body">
          {this.props.body}
        </p>
      </section>
    );
  }
}
