import React, { Component } from "react";
import Users from "./Users";
import AddUser from "./AddUser";
class App extends Component {
  state = {
    users: [
      { name: "abcd", age: "20", id: "1" },
      { name: "defg", age: "21", id: "2" }
    ]
  };

  addUser = user => {
    user.id = Math.random();
    let users = [...this.state.users, user];
    this.setState({
      users: users
    });
  };

  deleteUser = id => {
    let users = this.state.users.filter(user => {
      return user.id !== id;
    });
    this.setState({
      users: users
    });
  };

  render() {
    return (
      <div className="App">
        <h1>helloo...</h1>
        <Users deleteUser={this.deleteUser} users={this.state.users} />
        <AddUser addUser={this.addUser} />
      </div>
    );
  }
}

export default App;
