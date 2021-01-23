import React, { Component } from 'react';

import './style.css';

export default class CardItem extends Component {
  render() {
    return(
      <section className="card-item">
        <header className="card-item_header">
          <h3 className="card-item_title">Title</h3>
        </header>
        <p className="card-item_body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius minima quisquam tempore earum quas
        </p>
      </section>
    );
  }
}
