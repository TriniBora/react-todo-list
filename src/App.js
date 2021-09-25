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

    this.handleChange = this.handleChange.bind(this);
    this.addNewTodo = this.addNewTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);

  }

  clearField() {
    document.getElementById("todo-form").reset();
  }

  handleChange(event) {
    this.setState({
      currentTodo: {
        id: this.state.todoList.length + 1,
        description: event.target.value,
      },
    } );

  }

  addNewTodo(event) {
    event.preventDefault();
    const newTodo = this.state.currentTodo;
    if (newTodo.description !== "") {
      const todos = [...this.state.todoList, newTodo];
      this.setState({
        todoList: todos,
        currentTodo: {
          id: 0,
          description: "",
        },
      } );
      this.clearField();
    }
  }

  deleteTodo(id) {
    const filteredTodos = this.state.todoList.filter((el) => el.id !== id);
    this.setState({
      todoList: filteredTodos,
    });
  }

  render() {
    return (
      <>
        <Header />
        <div className="todo-container">
          <div className="todo-header">
            <TodoForm
              currentTodo={ this.state.currentTodo }
              addNewTodo={ this.addNewTodo }
              handleChange={ this.handleChange }
              clearField={ this.clearField}
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
