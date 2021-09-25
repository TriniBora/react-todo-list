import React, { Component } from "react";
import "../css/TodoList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlipMove from "react-flip-move";
class Todo extends Component {

  render() {
    return (
      <li className="todo-item">
        { this.props.item.description}
        <i>
          <FontAwesomeIcon
            id="trash" icon={ [ "fas", "trash" ] }
            onClick={ () => this.props.deleteTodo( this.props.item.id ) }
          />
        </i>
      </li>
    )
  }
}

class TodoList extends Component {

  render() {
    return (
      <ul className="todo-list">
        <FlipMove duration={ 300 } easing="ease-in-out">
          { this.props.todoList.map( ( item ) =>
            <Todo
              key={ item.id }
              item={ item }
              deleteTodo={ this.props.deleteTodo } /> ) }
        </FlipMove>
      </ul>
    );
  }

}

export default TodoList;
