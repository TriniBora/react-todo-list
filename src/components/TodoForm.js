import React, { Component } from "react";
import "../css/TodoForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class TodoForm extends Component {

  // state = {
  //   todoList: [],
  //   currentTodo: {
  //     id: 0,
  //     description: "",
  //   },
  // };

  shouldComponentUpdate( nextProps ) {
    console.log(this.props.currentTodo.description)
    console.log(nextProps.value)
    console.log(this.props.todoList)
    return this.props.currentTodo.description !== nextProps.value
  };

  render() {
    return (
      <form id="todo-form" onSubmit={this.props.addNewTodo}>
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
