import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Props from './Props';

class Myindex extends Component {
   render() {
      return (<h1>hello from my index</h1>);
   }
   render() {
      return (<h1>hello..{check(person)}</h1>);
   }
};
function toprint(person) {
   return person.firtname + ' ' + person.lastname;
}
function check(person) {
   if (!person) {   // toprint(person);
      return <h1>Hello, stranger!</h1>;
   }
   return <h1>{toprint(person)}!</h1>;
}
const person = {
   firtname: 'Piya',
   lastname: 'Kore'
};
// function Welcome(props) {
//    return <h1>Hello, {props.name}</h1>;
//  }

//  const element = <Welcome name="Sara" />;
//  ReactDOM.render(
//    element,
//    document.getElementById('root')
//  );
ReactDOM.render(<Props />, document.getElementById('root'));

export default Myindex;