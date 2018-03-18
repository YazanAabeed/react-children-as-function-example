import React from "react";
import PropTypes from "prop-types";

export default class ParentComponent extends React.Component {
  state = {
    counter: 0
  };

  increment = event => {
    this.setState((prevState, props) => {
      let newCounterValue = prevState.counter + 1;

      return {
        counter: newCounterValue
      };
    });
  };

  decrement = event => {
    this.setState((prevState, props) => {
      let newCounterValue = prevState.counter - 1;

      return {
        counter: newCounterValue
      };
    });
  };

  render() {
    return (
      <div>
        {this.props.children(
          this.state.counter,
          this.increment,
          this.decrement
        )}
      </div>
    );
  }
}

ParentComponent.propTypes = {
  children: PropTypes.func.isRequired
};
