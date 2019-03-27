import React, { Component } from "react";
export default class AddUser extends Component {
  state = {
    name: null,
    age: null
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addUser(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" onChange={this.handleChange} />

          <label htmlFor="class">Age</label>
          <input type="text" id="age" onChange={this.handleChange} />

          <button>Submit</button>
        </form>
      </div>
    );
  }
}
