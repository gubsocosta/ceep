import React, { Component } from 'react';
import CardItem from './CardItem';

export default class NotesList extends Component {
  render() {
    return(
      <ul>
        <li>
          <CardItem />
        </li>
      </ul>
    );
  }
}
