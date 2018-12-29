import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./actions";
import "./App.css";

const App = ({ count, increment, decrement }) => {
  return (
    <div className="ui one column stackable center aligned page grid">
      <div className="column twelve wide">
        <button onClick={increment} className="ui inverted orange  button">
          More
        </button>
        <button onClick={decrement} className="ui inverted yellow button">
          Less
        </button>
        <h4>Think as much or as little as you want!</h4>{" "}
        <span>
          <h1>
            <img
              src="https://i.kym-cdn.com/photos/images/original/001/273/780/f05.png"
              style={{ transform: `scale(${count})` }}
            />
          </h1>
        </span>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

export default connect(
  mapStateToProps,
  { increment, decrement }
)(App);
