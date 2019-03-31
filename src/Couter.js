import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CountUp from 'react-countup';
import './App.css';


class Counter extends Component {
  render() {
    return (
      <div className='master'>

      <div className='card'>
      <div class="container">
      <img className='icon-image' src={ require('./assets/speaker-icon.png') } />
        <h4><b>{this.props.title}</b></h4> 
        <div className='count'>
          <CountUp end={this.props.end} duration={this.props.duration} />
        </div>
      </div>
      </div>
      </div>
    );
  }
}

export default Counter;
