import React, { Component } from "react";
import "../css/TodoList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlipMove from "react-flip-move";
class Todo extends Component {
  render() {
    const { item } = this.props;

    return (
      <div className="todo-item">
        <li>{item.description}</li>
        <i>
          <FontAwesomeIcon
            id="trash"
            icon={["fas", "trash"]}
            onClick={() => this.props.deleteTodo(item.id)}
          />
        </i>
      </div>
    );
  }
}

export default class TodoList extends Component {
  render() {
    return (
      <ul className="todo-list">
        <FlipMove duration={1200} easing="ease-in-out">
          {this.props.todoList.map((item) => (
            <Todo
              key={item.id}
              item={item}
              deleteTodo={this.props.deleteTodo}
            />
          ))}
        </FlipMove>
      </ul>
    );
  }
}
