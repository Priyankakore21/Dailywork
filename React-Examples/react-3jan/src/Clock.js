import React, { Component } from 'react';
import ReactDOM from 'react-dom'

class Clock extends Component {
    render() {
       return (<h1>hello from my index</h1>);
    }
}
function Clock1(props) {
    return (
      <div>
        <h2>It is {props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
  
  function tick() {
    ReactDOM.render(
      <Clock1 date={new Date()} />,
      document.getElementById('root')
    );
  }
  
  setInterval(tick, 1000);
  
  export default Clock;