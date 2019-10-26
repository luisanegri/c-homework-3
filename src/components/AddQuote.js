import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NewQuote from './NewQuote';

export default class AddQuote extends Component {
  static propTypes = {
    addQuote: PropTypes.func.isRequired
  };

  state = {
    quotes: { quote: '', author: '' }
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addQuote(this.state.quoteText);
  };

  handleChange = event => {
    const quotes = { ...this.state.quotes };
    quotes[event.currentTarget.name] = event.currentTarget.value;
    this.setState({
      quotes
    });
  };

  render() {
    const { quotes } = this.state;
    return (
      <div className="add-quote">
        <form onSubmit={this.handleSubmit}>
          <label>
            Author:
            <input
              type="text"
              name="quote"
              onChange={this.handleChange}
              value={this.state.quotes.quote}
            />
          </label>
          <label>
            Quote:
            <input
              type="text"
              name="author"
              onChange={this.handleChange}
              value={quotes.author}
            />
          </label>
          <input type="submit" value="Add" />
        </form>
        <NewQuote quote={quotes.quote} author={quotes.author} />
      </div>
    );
  }
}
