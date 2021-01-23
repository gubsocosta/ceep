import React, { Component } from 'react';

export default class RegisterForm extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="title"/>
        <textarea placeholder="Type your text here..."/>
        <buton>Create note</buton>
      </form>
    );
  }
}
