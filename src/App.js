import React, { Component } from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
      randomIndex: 0,
    }
    this.changeIndex = this.changeIndex.bind(this);
  }

  componentDidMount() {
    fetch(`https://talaikis.com/api/quotes/`)
      .then(res => res.json())
      .then(json =>
        this.setState({
          isLoaded: true,
          data: json,
        })
      );
  }

  changeIndex() {
    this.setState({
      randomIndex: Math.floor(Math.random() * 100)
    })
  }


  render() {
    var { isLoaded, data } = this.state;
    console.log(data.map(user => user.quote));
    return (
      <div className="index__mainArea">
        <div className="index__textArea">
          <QuoteText qText={data.map(user => user.quote)} rIndex={this.state.randomIndex} />
          <QuoteAuthor author={data.map(user => user.author)} rIndex={this.state.randomIndex} />
          <ul className="index__buttonsLayout">
            <li><TweetQuote tweetQuote="tweet quote" /></li>
            <li><NewQuote cIndex={this.changeIndex} /></li>
          </ul>
        </div>
      </div>
    );
  }
}

const QuoteText = (props) => {
  return (
    <div id="text">"{props.qText[props.rIndex]}"</div>
  );
}

const QuoteAuthor = (props) => {
  return (
    <div id="author">{props.author[props.rIndex]}</div>
  );
}

const NewQuote = (props) => {
  return (
    <button type="button" id="new-quote" onClick={props.cIndex}>New quote</button>
  );
}

const TweetQuote = (props) => {
  return (
    <a href="https://www.twitter.com/intent/tweet" target="_blank" id="tweet-quote" class="twitter fa fa-twitter"></a>
  );
}
      
      export default App;
