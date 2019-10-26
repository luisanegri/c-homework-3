import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

export default class NewQuote extends Component {
  static propTypes = {
    quote: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  };

  render() {
    return (
      <div>
        <p>{this.props.quote}</p>
        <p>{this.props.author}</p>
      </div>
    );
  }
}
