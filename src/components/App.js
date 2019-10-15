/* To get the random quote API */

import React, { Component } from 'react';
import  myData from '../data.json';
import '../App.css';

import QuoteAuthor from './QuoteAuthor';
import QuoteText from './QuoteText';
import TweetQuote from './TweetQuote';


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


export default App;
