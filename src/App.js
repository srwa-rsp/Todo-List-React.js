import React, { Component } from "react";
import InputItem from "./inputItem";
import TodoList from "./todoList";

class App extends Component{
  constructor(props){
      super(props);
      this.state ={
        todos:[]
      };
      this.addTodo = this.addTodo.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
      this.handleComplete = this.handleComplete.bind(this);
   }

   addTodo(todo){
     this.setState( prevState => ({
       todos: [...prevState.todos, {text: todo, id: Date.now() + todo, isCompleted: false}]
     }));
   }
   handleDelete(todo) {
       this.setState({
          todos: this.state.todos.filter(e => e.id !== todo.id)}
        );
    }
    handleComplete(todo){
      this.setState(
        this.state.todos.map(item => {
          if(item.id === todo.id){
            item.isCompleted = !item.isCompleted;
          }
        })
      );
    }

  render(){
    return(
      <div id='app' className='container w-2/5 mx-auto bg-gray-200 flex flex-col items-center'>
        <h1 className='text-center mb-8 font-bold text-xl text-gray-800 py-4'>Serwa's Todo List</h1>
        <InputItem addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} handleDelete={this.handleDelete} handleComplete={this.handleComplete}/>
      </div>
    )
  }
}

export default App;