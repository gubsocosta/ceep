import React, { Component } from 'react';

import './style.css';

export default class RegisterForm extends Component {
  render() {
    return (
      <form className="register-form">
        <input
          type="text"
          placeholder="title"
          className="register-form_input"
        />
        <textarea
          placeholder="Type your text here..."
          rows={ 15 }
          className="register-form_input"
        />
        <button className="register-form_input register-form_submit">Create note</button>
      </form>
    );
  }
}
