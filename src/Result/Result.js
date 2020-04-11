import React, { Component } from 'react';
import './Result.css';

class Result extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
        <div id='result'>
          <h1>{ this.props.output }</h1>
        </div>
      );
  }
}

export default Result;
