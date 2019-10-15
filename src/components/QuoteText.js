import React, { Component } from 'react';
import '../App.css';

const QuoteText = (props) => {
  return (
    <div id="text" dangerouslySetInnerHTML={{ __html: props.qText }}></div>
  );
}

export default QuoteText;