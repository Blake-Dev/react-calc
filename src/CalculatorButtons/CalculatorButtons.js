import React, { Component } from 'react';

import './CalculatorButtons.css';

class CalculatorButtons extends Component {
  render() {
    return (
        <div>
          <div className='button-row'>
            <button name='AC' className='special' onClick={ e => this.props.onClick(e.target.name) }>AC</button>
            <button name='+/-' className='special' onClick={ e => this.props.onClick(e.target.name) }>+/-</button>
            <button name='%' className='special' onClick={ e => this.props.onClick(e.target.name) }>%</button>
            <button name='/' className='operation' onClick={ e => this.props.onClick(e.target.name) }>/</button>
          </div>
          <div className='button-row'>
            <button name='7' onClick={ e => this.props.onClick(e.target.name) }>7</button>
            <button name='8' onClick={ e => this.props.onClick(e.target.name) }>8</button>
            <button name='9' onClick={ e => this.props.onClick(e.target.name) }>9</button>
            <button name='*' onClick={ e => this.props.onClick(e.target.name) } className='operation'>x</button>
          </div>
          <div className='button-row'>
            <button name='4' onClick={ e => this.props.onClick(e.target.name) }>4</button>
            <button name='5' onClick={ e => this.props.onClick(e.target.name) }>5</button>
            <button name='6' onClick={ e => this.props.onClick(e.target.name) }>6</button>
            <button name='-' onClick={ e => this.props.onClick(e.target.name) } className='operation'>-</button>
          </div>
          <div className='button-row'>
            <button name='1' onClick={ e => this.props.onClick(e.target.name) }>1</button>
            <button name='2' onClick={ e => this.props.onClick(e.target.name) }>2</button>
            <button name='3' onClick={ e => this.props.onClick(e.target.name) }>3</button>
            <button name='+' onClick={ e => this.props.onClick(e.target.name) } className='operation'>+</button>
          </div>
          <div className='button-row'>
            <button name='0' id='zero' onClick={ e => this.props.onClick(e.target.name) }>0</button>
            <button name='.' onClick={ e => this.props.onClick(e.target.name) }>.</button>
            <button name='=' className='operation' onClick={ e => this.props.onClick(e.target.name) }>=</button>
          </div>
        </div>
      );
  }
}

export default CalculatorButtons;
