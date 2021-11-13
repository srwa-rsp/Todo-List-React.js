import react from "react";

class Todo extends react.Component{
    constructor(props){
        super(props);
        this.delete = this.delete.bind(this);
        this.complete = this.complete.bind(this);
    }
    delete(){
        this.props.handleDelete(this.props.todo);
    }
    complete(){
        this.props.handleComplete(this.props.todo);
    }
    render(){
        return(
        <div className=' flex justify-between bg-white rounded-lg mb-2 py-1 px-2 text-lg font-semibold text-gray-700 shadow-sm'>
            <li className={`inline-block ${this.props.todo.isCompleted ? "completed" : "" }`}>{this.props.todo.text}</li>
            <div>
                <button onClick={this.delete}><i className='fa fa-trash mr-2 shadow-sm p-1 '></i></button>
                <button onClick={this.complete}><i className='fa fa-check shadow-sm p-1'></i></button>
            </div>

        </div>
        )
    }
}
export default Todo;