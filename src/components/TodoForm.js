import React, { Component } from "react";
import "../css/TodoForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class TodoForm extends Component {

  render() {

    const addNewTodo = this.props.addNewTodo;
    const description = this.props.description;
    const handleChange = this.props.handleChange;

        return (
          <form id="todo-form" onSubmit={ addNewTodo }>
            <input
              type="text"
              placeholder="Add your task"
              value={ description }
              onChange={handleChange }
              />
            <button type="submit">
              <i>
                <FontAwesomeIcon id="plus" icon={ [ "fas", "plus" ] }/>
              </i>
            </button>
          </form>
        )
    }
};

export default TodoForm;
