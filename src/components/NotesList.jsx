import React, { Component } from 'react';
import CardItem from './CardItem';

export default class NotesList extends Component {
  render() {
    return(
      <ul>
        { 
          Array
            .of('Study', 'Work', 'Work')
            .map((category, index) => {
              return(
                <li key={ index }>
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
