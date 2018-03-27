import React, { Component } from 'react';

class SearchBar extends Component {

  constructor (props) {
    super(props);
    
    this.state = { term: '' };
  }

  render () {
    return (
      <div>
      <input onChange={event => this.onChangeHandle(event)} />
      {this.state.term}
      </div>
      );
  }

  onChangeHandle (e) {
    this.setState({
      term: e.target.value
    })
  }
}

export default SearchBar;