import React, { Component } from "react";

class InputTodo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            todos: []
          };

        this.addItem = this.addItem.bind(this);
      }
      
      render() {
          return (
            <form onSubmit={this.addItem} className='mb-8'>
            <input type='text' ref={(a) => this._inputElement = a} placeholder="enter an activity..." className='p-1 rounded mr-4'>
            </input>
            <button type="submit" className='rounded bg-purple-400 p-1'>add</button>
          </form>
          );

      }
    /********Functions***************/
    addItem(e) {
        if (this._inputElement.value !== "") {
          var newItem = {
            text: this._inputElement.value,
            key: Date.now() + this.text,
            isCompleted: false,
            isDeleted: false,
          };
       
          this.setState((prevState) => {
            return { 
              todos: prevState.todos.concat(newItem)
            };
          });
         
          this._inputElement.value = "";
        }
         
        console.log(this.state.todos);
           
        e.preventDefault();
      }
}
export default InputTodo;