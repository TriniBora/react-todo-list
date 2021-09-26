import React, { Component } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Header from "./components/Header";
import Footer from "./components/Footer";

library.add(fas);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      currentTodo: {
        id: 0,
        description: "",
      },
    };
  }

  clearField() {
    document.getElementById("todo-form").reset();
  }

  handleChange = (event) => {
    this.setState({
      currentTodo: {
        id: this.state.todoList.length + 1,
        description: event.target.value,
      },
    });
  };

  addNewTodo = (event) => {
    event.preventDefault();

    const newTodo = this.state.currentTodo;

    if ( newTodo.description !== "" ) {

      this.setState({
        todoList: [...this.state.todoList, newTodo],
      } );

      this.clearField();
    }
  };

  deleteTodo = (id) => {
    const filteredTodos = this.state.todoList.filter((el) => el.id !== id);
    this.setState({
      todoList: filteredTodos,
    });
  };

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.title !== nextProps.title ||
     this.state.input !== nextState.input }

  render() {
    return (
      <>
        <Header />
        <div className="todo-container">
          <div className="todo-header">
            <TodoForm
              currentTodo={this.state.currentTodo}
              addNewTodo={this.addNewTodo}
              handleChange={this.handleChange}
            />
          </div>
          <div className="todo-body">
            <TodoList
              todoList={this.state.todoList}
              deleteTodo={this.deleteTodo}
            />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
