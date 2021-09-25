import React, { Component } from "react";
import "../css/TodoList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Todo extends Component {

  render() {
    const description = this.props.item.description;
    const id = this.props.item.id;
    const deleteTodo = this.props.deleteTodo;

    return (

      <>
        <p>{ console.log( description, id ) }</p>
      <li className="list">
          { description}

        <i>
            <FontAwesomeIcon
              className="icon" icon={ [ "fas", "trash" ] }
              onClick={ () => deleteTodo( id ) } />
        </i>
      </li>
    </>)
  }
}

class TodoList extends Component {

  render() {
    const items = this.props.todoList;
    const deleteTodo = this.props.deleteTodo;

    return (
      <ul>{ items.map( ( item ) => <Todo key={ item.id } item={ item } deleteTodo={ deleteTodo }/> ) }</ul>
    );
  }

}

export default TodoList;
