import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Couter';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter title='Speakers' end={500} duration={3} />
        <Counter title='Attendees' end={3784} duration={3} />
        <Counter title='Events' end={15} duration={3} />

      </div>
    );
  }
}

export default App;
