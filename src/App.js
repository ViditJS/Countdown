import React, { Component } from 'react';
import Clock from './clock'
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
          <Clock deadline = {this.state.deadline}/>
          <div>
            <input placeholder="new Date" onChange={event => this.setState({newDeadLine: event.target.value})}/>
            <button onClick={() => this.changeDeadline()}> Submit </button>
          </div>
      </div>
    );
  }
}

export default App;
