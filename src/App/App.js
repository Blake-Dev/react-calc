import React, { Component } from 'react';
import './App.css';

import Result from '../Result/Result';
import CalculatorButtons from '../CalculatorButtons/CalculatorButtons';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      output: '',
    };
  }

  onClick = button => {
    if (button === '=') {
      this.calculate();
    } else if (button === 'AC') {
      this.clear();
    } else if (button === '+/-') {
      this.invert();
    } else if (button === '%') {
      this.percent();
    } else {
      this.setState({ output: this.state.output + button });
    }
  }

  calculate = () => {
    this.setState({ output: eval(this.state.output).toString() });
  }

  clear = () => {
    this.setState({ output: '' });
  }

  invert = () => {
    let o = this.state.output;

    if (o.length > 0) {
      if (o[0] === '-') {
        this.setState({ output: o.substr(1) });
      } else {
        this.setState({ output: '-' + o });
      }
    }
  }

  percent = () => {
    let o = parseInt(this.state.output);
    o = o * 0.01;

    this.setState({ output: o });
  }

  render() {
    return (
      <div id='app' className="App">
        <Result output={ this.state.output } />
        <CalculatorButtons onClick={ this.onClick } />
      </div>
    );
  }
}

export default App;
