import React, { Component } from "react";
import InputTodo from "./input";

class TodoList extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div id='todo-list' className='container w-2/5 mx-auto bg-gray-200 flex flex-col items-center'>
        <h1 className='text-center mb-8'>Serwa's Todo List</h1>
        <InputTodo />
      </div>
    )
  }
}

export default TodoList;