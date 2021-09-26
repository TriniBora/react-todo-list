import React, { Component } from "react";
import "../css/TodoForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class TodoForm extends Component {

  // shouldComponentUpdate( nextState ) {
  //   const descriptions = this.props.getDescriptions();
  //   console.log(descriptions)
  //   if (descriptions.find(el=> el === nextState.value)) {
  //     return true;
  //   }
  //   // if (this.state.count !== nextState.count) {
  //   //   return true;
  //   // }
  //   return false;
  // }

  render() {
    return (
      <form id="todo-form" onSubmit={ this.props.addNewTodo }>
        <input
          type="text"
          placeholder="Add your task"
          value={this.props.description}
          onChange={this.props.handleChange}
        />
        <button type="submit">
          <i>
            <FontAwesomeIcon id="plus" icon={["fas", "plus"]} />
          </i>
        </button>
      </form>
    );
  }
}
