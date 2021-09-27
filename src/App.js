import React, { Component } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

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

  getMaxId = () => {
    if (this.state.todoList.length) {
      const max = Math.max(...this.state.todoList.map((el) => el.id));
      return max;
    } else {
      return -1;
    }
  };

  handleChange = (event) => {
    const maxId = this.getMaxId();
    this.setState({
      currentTodo: {
        id: maxId + 1,
        description: event.target.value.trim(),
      },
    });
  };

  clearField() {
    document.getElementById("todo-form").reset();
  }

  showAlert = (title, icon) => {
    const MySwal = withReactContent(Swal);
    return MySwal.fire({
      position: "center",
      icon: icon,
      title: title,
      showConfirmButton: false,
      timer: 1200,
      width: "300px",
    });
  };

  getDescriptions = () => {
    const descriptions = this.state.todoList.map((el) =>
      el.description.toLowerCase()
    );
    return descriptions;
  };

  checkDuplicated = (description) => {
    const descriptions = this.getDescriptions();
    const descriptionToLower = description.trim().toLowerCase();

    return descriptions.includes(descriptionToLower);
  };

  addNewTodo = (event) => {
    event.preventDefault();
    const newTodo = this.state.currentTodo;
    const isDuplicated = this.checkDuplicated(newTodo.description);

    if (newTodo.description === "" || /[ \t\r\n\f]/.test(newTodo.description)) {
      this.showAlert("You must write a task!", "warning");
    } else {
      if (isDuplicated) {
        this.showAlert("This task is already submitted!", "error");
      } else {
        this.setState({
          todoList: [...this.state.todoList, newTodo],
          currentTodo: {
            id: 0,
            description: "",
          },
        });
        this.showAlert("Your task has been submitted!", "success");
      }
    }
    this.clearField();
  };

  shouldComponentUpdate(nextProps, nextState) {
    return this.checkDuplicated(
      nextState.currentTodo.description.trim().toLowerCase()
    );
  }

  deleteTodo = (id) => {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: "Are you really want your task?",
      icon: "warning",
      width: "300px",
      showCancelButton: true,
      confirmButtonColor: "rgb(32, 106, 93)",
      cancelButtonColor: "rgb(245, 134, 52)",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const filteredTodos = this.state.todoList.filter((el) => el.id !== id);
        this.setState({
          todoList: filteredTodos,
        });
        this.showAlert("Your task has been deleted", "success");
      }
    });
  };

  render() {
    this.getMaxId();
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
