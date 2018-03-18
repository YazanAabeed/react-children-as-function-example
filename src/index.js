import React from "react";
import { render } from "react-dom";
import ParentComponent from "./ParentComponent";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <h1>Use chidlren as function React</h1>
    <ParentComponent>
      {(counter, increment, decrement) => (
        <div>
          {counter} <br />
          <button onClick={increment}>increment</button>
          <button onClick={decrement}>decrement</button>
        </div>
      )}
    </ParentComponent>
  </div>
);

render(<App />, document.getElementById("root"));
