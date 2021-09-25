import React, { Component } from "react";
import "../css/TodoList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Todo extends Component {
  constructor ( props ) {
    super( props );
  }

  render() {
    return(
    <>
      <li className="list">
        { this.props.description }
        <i>
          <FontAwesomeIcon className="icon" icon={ [ "fas", "trash" ] } onClick={ () => this.props.deleteTodo( this.props.id ) } />
        </i>
      </li>
    </>)
  }
}

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const items = this.props.todoList;
    return (
      <ul>{ items.map( ( item ) => <Todo key={ item.id } description={ item.description } deleteTodo={ this.props.deleteTodo }/> ) }</ul>
    );
  }

}

export default TodoList;
