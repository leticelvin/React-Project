import React, { Component } from "react";

//Todoinput.js

export default class TodoInput extends Component {
  render() {
    return (
      <div className="card card-body my-3">
        <form>
         <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text bg-primary text-white">
	          <i className="fas fa-book" />
	           </div>
	        </div>
	        <input type="text" classname="form-control text-capitalize" placeholder="Add task"/>
	      </div>
       </form>
      </div>
      );
     }
}
