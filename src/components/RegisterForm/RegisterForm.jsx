import React, { Component } from 'react';

import './style.css';

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.title = '';
    this.body = '';
  }

  _handleOnChangeTitle(event) {
    event.stopPropagation();
    this.title = event.target.value;
  }

  _handleOnChangeBody(event) {
    event.stopPropagation();
    this.body = event.target.value;
  }

  _createCard(event) {
    event.preventDefault();
    event.stopPropagation();

    this.props.createCard(this.title, this.body);
  }

  render() {
    return (
      <form
        className="register-form"
        onSubmit={ this._createCard.bind(this) }
      >
        <input
          type="text"
          placeholder="title"
          className="register-form_input"
          onChange={ this._handleOnChangeTitle.bind(this) }
        />
        <textarea
          placeholder="Type your text here..."
          rows={ 15 }
          className="register-form_input"
          onChange={ this._handleOnChangeBody.bind(this) }
        />
        <button className="register-form_input register-form_submit">Create note</button>
      </form>
    );
  }
}
