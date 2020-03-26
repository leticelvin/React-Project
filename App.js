import React, { Component } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

class App extends Component {
    render() {
             return (
                <div>
                   Tasks
                   <TodoInput />
                   <TodoList />
                </div>
                 );
	}
}

export default App;
