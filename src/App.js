import React, { Component } from "react";
import './App.css'
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';


library.add( fas );

class App extends Component {
  constructor ( props ) {
    super( props );
    this.state = {
      todoList: [],
      currentTodo: {
        id: 0,
        description: "",
      }
    }

    this.handleChange = this.handleChange.bind( this );
    this.addNewTodo = this.addNewTodo.bind( this );
    this.deleteTodo = this.deleteTodo.bind( this );

  }

  handleChange( event ) {
    this.setState( {
      currentTodo: {
        id: parseInt(Math.random() * 1000),
        description: event.target.value,
      }
    } );
  };

  addNewTodo( event ) {
    event.preventDefault();
    const newTodo = this.state.currentTodo;
    if ( newTodo.description !== "" ) {
      const todos = [ ...this.state.todoList, newTodo ];
      this.setState( {
        todoList: todos,
        currentTodo: {
          id: 0,
          description:"",
        }
      })
    }

  };

  deleteTodo( id ) {
    const filteredTodos = this.state.todoList.filter( el => el.id !== id );
    this.setState( {
      todoList:filteredTodos,
    })
  }


  render() {
    return (
      <div className="container">
        <header>
          <h1>To-do List</h1>
          <TodoForm
            currentTodo={ this.state.currentTodo }
            addNewTodo={ this.addNewTodo }
            handleChange={ this.handleChange } />
        </header>
        <TodoList
          todoList={ this.state.todoList }
          deleteTodo={ this.deleteTodo } />
      </div>
    );
  }
}

export default App;

{/* <form id="todo-form" onSubmit={ this.addNewTodo}>
            <input
              type="text"
              placeholder="Add your task"
              value={ this.state.currentTodo.description }
              onChange={ this.handleChange}
              />
            <button type="submit">Add</button>
          </form> */}
