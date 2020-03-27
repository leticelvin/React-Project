import React, { Component } from "react";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
state={
  items: [],
  id:0,
  item: ' ',
  editItem: false
};

handleChange = (e) => {
  this.setState({ item: e.target.value });
};
    render() {
             return (
                <div className="container">
                 <div className="row">
                  <div className="col-10 mx-auto col-md-8 mt-4">
                   <h2> className="text-capitalize text-center">Input</h2>
                    <TodoInput item={this.state.item} handleChange={this.handleChange} />
                    <TodoList />
                  </div>
                 </div>
                </div>
                 );
	}
}

export default App;
