import "./App.css";
import React, { useState, useEffect } from "react";
import RobotCardList from "../components/RobotCardList";
import SearchBox from "../components/SearchBox";
import ErrorBoundary from "../components/ErrorBoundary";

function App() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchField] = useState("");
  const [count, setCount] = useState(0);
  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setRobots(users);
      });
  }, []); // Why empty array ? Only run one time -> https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects

  useEffect(() => {
    console.log(count);
  }, [count]); // It runs everytime count changes

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  return !robots.length ? (
    <h1>Loading..</h1>
  ) : (
    <div className="App">
      <header className="App-header">
        <h1>ROBOTFRIENDS</h1>
        <button onClick={() => setCount(count + 1)}>Click Me</button>

        <SearchBox
          className="App-search"
          searchValue={searchfield}
          searchChange={onSearchChange}
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

export default App;
