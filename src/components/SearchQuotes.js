import React, { Component } from 'react';
import '../App.css';
import Quotes from './Quotes';
import AddQuote from './AddQuote';

export default class SearchQuotes extends Component {
  state = {
    loading: true,
    quotes: [],
    error: false,
    fetching: false
  };

  fetchingData = () => {
    fetch('https://quote-garden.herokuapp.com/quotes/search/tree')
      .then(res => res.json())
      .then(parsedJSON =>
        parsedJSON.results.map(quote => ({
          id: quote._id,
          author: quote.quoteAuthor,
          quote: quote.quoteText,
          liked: 0,
          disliked: 0
        }))
      )
      .then(quotes =>
        this.setState({
          quotes,
          loading: false,
          fetching: true
        })
      )
      .catch(error => {
        this.setState({ loading: false, error: true });
      });
  };

  componentDidMount() {
    this.fetchingData();
  }

  likes = (liked, id) => {
    const quotes = this.state.quotes;
    this.setState({
      quotes: this.state.quotes.map(quote =>
        quote.id === id ? { ...quotes, liked: quote.liked + 1 } : quote
      )
    });
  };

  dislikes = id => {
    const quotes = this.state.quotes;
    this.setState({
      quotes: this.state.quotes.map(quote =>
        quote.id === id ? { ...quotes, disliked: quote.disliked - 1 } : quote
      )
    });
  };

  addQuote = quoteText => {
    const quote = {
      id: Math.round(Math.random() * 100000),
      quoteText
    };
    this.setState({
      quotes: this.state.quotes.concat(quote)
    });
  };

  render() {
    console.log(this.state.quotes);
    if (this.state.loading) {
      return this.state.quotes;
    } else if (this.state.error) {
      return <h2>Something went wrong!</h2>;
    } else {
      return (
        <div>
          {this.state.quotes.map(quote => (
            <Quotes
              key={quote.id}
              quote={quote.quote}
              author={quote.author}
              id={quote.id}
              likes={this.likes}
              dislikes={this.dislikes}
            />
          ))}
          <AddQuote addQuote={this.addQuote} />
        </div>
      );
    }
  }
}
