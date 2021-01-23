import React, { Component } from 'react';

import CardItem from '../CardItem';
import './style.css';

export default class NotesList extends Component {
  render() {
    return(
      <ul className="notes-list">
        { 
          Array
            .of('Study', 'Work', 'Work')
            .map((category, index) => {
              return(
                <li
                  key={ index }
                  className="notes-list_item"
                >
                  <div>{ category }</div>
                  <CardItem />
                </li>
              );
            })
        }
      </ul>
    );
  }
}
