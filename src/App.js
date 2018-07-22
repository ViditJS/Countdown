import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

state = {
  deadline: 'December 25, 2017',
  newDeadLine: ''
}

changeDeadline() {
  this.setState({deadline:this.state.newDeadLine })
}

  render() {
    return (
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadline}</div>
          <div>
            <div className="Clock-days"> 14 days</div>
            <div className="Clock-hours">30 hours</div>
            <div className="Clock-minutes">15 minutes</div>
            <div className="Clock-seconds">20 seconds</div>
          </div>
          <div>
            <input placeholder="new Date" onChange={event => this.setState({newDeadLine: event.target.value})}/>
            <button onClick={() => this.changeDeadline()}> Submit </button>
          </div>
      </div>
    );
  }
}

export default App;