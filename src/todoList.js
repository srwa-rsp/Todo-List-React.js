import React from "react";
import Todo from "./todo";
class TodoList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <ul className='w-60'>
                    {this.props.todos.map(todo => (
                        <Todo todos={this.props.todos} todo={todo} key={todo.id} 
                        handleDelete={this.props.handleDelete} handleComplete={this.props.handleComplete}/>
                    ))}
                </ul>
            </div>
        );
      
    }
    
}
export default TodoList;