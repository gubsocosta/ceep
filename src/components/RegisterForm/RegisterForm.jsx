import React, { Component } from 'react';

import './style.css';

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.title = '';
    this.body = '';
    this.category = 'no category';
    this.state = {categoryList: []};

    this._handleOnChangeTitle = this._handleOnChangeTitle.bind(this);
    this._handleOnChangeBody = this._handleOnChangeBody.bind(this);
    this._handleOnChangeCategory = this._handleOnChangeCategory.bind(this);
    this._addCard = this._addCard.bind(this);
    this._newCategoryList = this._newCategoryList.bind(this);
  }

  componentDidMount() {
    this.props.categoryList.subscribe(this._newCategoryList);
  }

  componentWillUnmount() {
    this.props.categoryList.unsubscribe(this._newCategoryList);
  }

  _newCategoryList(categoryList) {
    this.setState({...this.state, categoryList});
  }

  _handleOnChangeTitle(event) {
    event.stopPropagation();
    this.title = event.target.value;
  }

  _handleOnChangeBody(event) {
    event.stopPropagation();
    this.body = event.target.value;
  }

  _handleOnChangeCategory(event) {
    event.stopPropagation();
    this.category = event.target.value;
  }

  _addCard(event) {
    event.preventDefault();
    event.stopPropagation();

    this.props.addCard(this.title, this.body, this.category);
  }

  render() {
    return (
      <form
        className="register-form"
        onSubmit={this._addCard}
      >
        <select
          className="register-form_input"
          onChange={this._handleChangeCategory}
        >
          <option value="No category">No category</option>
          { this.state.categoryList
              .map((item, index) => {
                return (
                  <option key={index} value={item}>{item}</option>
                );
              }) }
        </select>
        
        <input
          type="text"
          placeholder="title"
          className="register-form_input"
          onChange={this._handleOnChangeTitle}
        />

        <textarea
          placeholder="Type your text here..."
          rows={15}
          className="register-form_input"
          onChange={this._handleOnChangeBody}
        />
        
        <button className="register-form_input register-form_submit">Create note</button>
      </form>
    );
  }
}
