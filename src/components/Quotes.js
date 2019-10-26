import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

export default class Quotes extends Component {
  static propTypes = {
    quote: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    likes: PropTypes.func.isRequired,
    dislikes: PropTypes.func.isRequired
  };

  handleThumbsUp = event => {
    this.props.likes(this.props.id);
    console.log('id', this.props.id);
  };

  handleThumbsDown = event => {
    this.props.dislikes(this.props.id);
    console.log('id', this.props.id);
  };

  render() {
    return (
      <div className="quotes-wrapper">
        <p>{this.props.quote}</p>
        <p>By: {this.props.author}</p>
        <div className="like-btn">
          <span>
            <button onClick={this.handleThumbsUp}>
              <i className="fa fa-thumbs-up fa-2x"></i>
            </button>
          </span>
          <span>
            <button onClick={this.handleThumbsDown}>
              <i className="fa fa-thumbs-down fa-2x"></i>
            </button>
          </span>
        </div>
      </div>
    );
  }
}
