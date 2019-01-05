/* To get the random quote API */

import React, { Component } from 'react';
import  myData from './data.json';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      data: myData,
      isLoading: true,
      randomIndex: 0,
    }
    this.changeIndex = this.changeIndex.bind(this);
  }

  /*
  componentDidMount() {
    console.log(myData);
    fetch(`http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=35`)
      .then(res => res.json())
      .then(
      (result) => {
        this.setState({
          isLoaded: true,
          data: result,
        })
       },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        })
      }
      );
   }
   */

  changeIndex() {
    this.setState({
      randomIndex: Math.floor(Math.random() * 35)
    })    
    console.log()
  }


  render() {
    console.log(this.state.data[this.state.randomIndex].content)
     /* console.log(data.map(user => user.quote)); */
    return (
      <div id="quote-box" className="index__mainArea">
        <div className="index__textArea">
          
          <QuoteText qText={this.state.data[this.state.randomIndex].content} />
          <QuoteAuthor author={this.state.data[this.state.randomIndex].title} />
           <ul className="index__buttonsLayout">
            <li><TweetQuote tweetQuote="tweet quote" /></li>
            <li><button type="button" id="new-quote" onClick={this.changeIndex}>New Quote</button></li>
          </ul>
        </div>
      </div>
    );
  }
}

const QuoteText = (props) => {
  return (
    <div id="text" dangerouslySetInnerHTML={{ __html: props.qText }}></div>
  );
}

const QuoteAuthor = (props) => {
  return (
    <div id="author" dangerouslySetInnerHTML={{ __html: props.author }}></div>
  );
}


const TweetQuote = (props) => {
  return (
    <a href="https://www.twitter.com/intent/tweet" rel="noopener noreferrer" target="_blank" id="tweet-quote" className="twitter fab fa-twitter-square fa-2x"></a>
  );
}
      
      export default App;
