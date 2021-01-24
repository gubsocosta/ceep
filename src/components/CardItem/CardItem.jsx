import React, { Component } from 'react';

import './style.css';

export default class CardItem extends Component {
  render() {
    return(
      <section className="card-item">
        <header className="card-item_header">
          <h3 className="card-item_title">{ this.props.title }</h3>
        </header>
        <p className="card-item_body">
          { this.props.body }
        </p>
      </section>
    );
  }
}
