import React, { Component } from 'react';
import '../App.css';

const QuoteAuthor = (props) => {
  return (
    <div id="author" dangerouslySetInnerHTML={{ __html: props.author }}></div>
  );
}


export default QuoteAuthor;