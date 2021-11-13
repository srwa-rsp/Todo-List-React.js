import React from "react";


class InputItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {todoInput: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
      this.setState({
        todoInput: e.target.value
      });
    }
    handleSubmit(e) {
      e.preventDefault();
      this.props.addTodo(this.state.todoInput);
      this.setState (
        {todoInput : ""}
      );
    }

      render() {
          return (
            <div>
              <form className='mb-8' onSubmit={this.handleSubmit}>
              <input  type='text' value={this.state.todoInput} onChange={this.handleChange} placeholder="enter an activity..." className='py-1 px-4 rounded-lg mr-4 shadow-sm text-lg'>
              </input>
              <button type="submit" className='rounded-lg bg-purple-400 p-2 shadow-sm font-semibold text-gray-800'>Add</button>
              </form>
            </div>
          );
        }
}
export default InputItem;