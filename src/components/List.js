import React, { Component } from "react";
import "./styles/list.css";
import Todo from "./Todo";

class List extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      todos: ["Take out the trash", "Walk the dog"]
    };

    this.handleChange = this.handleChange.bind(this);
    this.add = this.add.bind(this);
    this.delete = this.delete.bind(this);
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    });
  }

  add() {
    this.setState(prevState => {
      return {
        todos: [prevState.input, ...prevState.todos],
        input: ""
      };
    });
  }

  delete(i) {
    const newTodos = this.state.todos.slice();
    newTodos.splice(i, 1);
    this.setState({
      todos: newTodos
    });
  }

  render() {
    return (
      <div className="List">
        <div className="form">
          <h1 style={{ marginLeft: "20px" }}>TO-DO:</h1>
          <input
            type="text"
            value={this.state.input}
            onChange={this.handleChange}
          />
          <button
            onClick={this.add}
            disabled={!this.state.input}
            style={{ marginLeft: "10px" }}
          >
            Add Todo
          </button>
        </div>
        <div className="list-container">
          {this.state.todos.map((todo, i) => {
            return <Todo title={todo} id={i} key={todo} delete={this.delete} />;
          })}
        </div>
      </div>
    );
  }
}

export default List;
