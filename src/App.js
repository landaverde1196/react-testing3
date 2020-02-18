import React, { Component } from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    users: [{ userName: "Phil" }, { userName: "Mark" }, { userName: "Flex" }]
  };

  UserNameHandler = event => {
    this.setState({
      users: [{ userName: event.target.value }, { userName: "Mark" }, { userName: "Flex" }]
    });
  };

  render() {
    return (
      <div>
        <UserInput
          userName={this.state.users[0].userName}
          changed={this.UserNameHandler.bind(this)}
        />
        <UserOutput userName={this.state.users[0].userName} />
        <UserOutput userName={this.state.users[1].userName} />
        <UserOutput userName={this.state.users[2].userName} />
      </div>
    );
  }
}

export default App;
