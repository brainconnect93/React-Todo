import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';

// eslint-disable-next-line react/prefer-stateless-function

class TodoContainer extends React.Component {
    state = {
      todos: [],
    };

    handleChange = (id) => {
      this.setState((prevState) => ({
        todos: prevState.todos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      }));
    };

    // the delete button code here

    delTodo = (id) => {
      this.setState({
        todos: [
          ...this.state.todos.filter((todo) => todo.id !== id),
        ],
      });
    };

    addTodoItem = (title) => {
      const newTodo = {
        id: uuidv4(),
        title,
        completed: false,
      };
      this.setState({
        todos: [...this.state.todos, newTodo],
      });
    };

    setUpdate = (updatedTitle, id) => {
      this.setState({
        todos: this.state.todos.map((todo) => {
          if (todo.id === id) {
            todo.title = updatedTitle;
          }
          return todo;
        }),
      });
    }

    // fetching API
    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then((response) => response.json())
        .then((data) => this.setState({ todos: data }));
    }

    render() {
      return (
        <div className="container">
          <div className="inber">
            <Header />
            <InputTodo addTodoProps={this.addTodoItem} />
            <TodosList
              todos={this.state.todos}
              handleChangeProps={this.handleChange}
              deleteTodoProps={this.delTodo}
              setUpdate={this.setUpdate}
            />
          </div>
        </div>
      );
    }
}

export default TodoContainer;
