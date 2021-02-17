import React, { Component } from 'react';

import './style.css';

export default class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = { categoryList: []};

    this._handleInputOnKeyUp = this._handleInputOnKeyUp.bind(this);
    this._newCategoryList = this._newCategoryList.bind(this);
  }

  componentDidMount() {
    this.props.categoryList.subscribe(this._newCategoryList);
  }

  _newCategoryList(categoryList) {
   this.setState({...this.state, categoryList});
  }

  _handleInputOnKeyUp (event) {
    if(event.key === "Enter") {
      const nameCategory = event.target.value;
      this.props.addCategory(nameCategory);
    }
  }
  
  render () {
    return (
      <section className="category-list">
        <ul className="category-list_list">
          {
            this.state.categoryList
              .map((item, index) => (
                <li
                  className="category-list_item"
                  key={index}
                >{item}</li>
              ))
          }
        </ul>
        <input 
          type="text"
          className="category-list_input"
          placeholder="Add new category..."
          onKeyUp={this._handleInputOnKeyUp}
        />
      </section>
    );
  }
}
