import React, { Component } from "react";
import "../css/TodoList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const items = this.props.todoList.map((item) => {
      return (
          <div className="list" key={ item.id }>
          <p>
            {item.description}{" "}
            <i>
                <FontAwesomeIcon className="icon" icon={ [ "fas", "trash" ] } onClick={ ()=> this.props.deleteTodo(item.id) }/>
            </i>
          </p>
        </div>
      );
    });

    return <div>{items}</div>;
  }
}

export default TodoList;
