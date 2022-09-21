import "./App.css";
import React, { Component } from "react";
import RobotCardList from "../components/RobotCardList";
import SearchBox from "../components/SearchBox";
import ErrorBoundary from "../components/ErrorBoundary";

class App extends Component {
  constructor() {
    super();
    this.state = { searchValue: "", robots: [] };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ robots: users });
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchValue: event.target.value });
  };

  render() {
    const { robots, searchValue } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    return !robots.length ? (
      <h1>Loading..</h1>
    ) : (
      <div className="App">
        <header className="App-header">
          <h1>ROBOTFRIENDS</h1>
          <SearchBox
            className="App-search"
            searchValue={this.searchValue}
            searchChange={this.onSearchChange}
          />
        </header>
        <main>
          <ErrorBoundary>
            <RobotCardList robots={filteredRobots} />
          </ErrorBoundary>
        </main>
      </div>
    );
  }
}

export default App;
