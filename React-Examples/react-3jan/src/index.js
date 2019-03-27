import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Myindex from './Myindex';
// import Props from './Props';
// import Clock from './Clock';
// import ClockState from './ClockState';
import ToggleButton from './ToggleButton';

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
// function toprint(person) {
//     return person.firtname + ' ' + person.lastname;
// }
// function check(person) {
//     if (!person) {   // toprint(person);
//         return <h1>Hello, stranger!</h1>;
//     }
//     return <h1>{toprint(person)}!</h1>;
// }
// const person = {
//     firtname: 'Piya',
//     lastname: 'Kore'
// };
// const element = <h1>hello..{check(person)}</h1>;

// // const element=<h1>hello,{person.firtname}{person.lastname}</h1>
// ReactDOM.render(element,document.getElementById('root'));
// ReactDOM.render(<Props />,document.getElementById('root'));
// ReactDOM.render(<Myindex />,document.getElementById('root'));
//ReactDOM.render(<Clock />,document.getElementById('root'));
// ReactDOM.render(<ClockState />, document.getElementById('root'));
ReactDOM.render(<ToggleButton />, document.getElementById('root'));