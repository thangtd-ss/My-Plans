import React from "react"
import {connect} from 'react-redux';
import * as TodoActions from '../actions/TodoActions';

class NoteList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      taskHover: false,
      doneTaskHover: false,
      lineThrough: false
    }
  }

  deleteTask(id){
    this.props.delete(id)
  }

  markTodo(id){
    this.props.doneTask(id)
  }

  handleHover = () => {
    this.setState(prevState => ({
      taskHover: !prevState.taskHover
    }));
  }

  handleHoverDelete = () => {
    this.setState(prevState => ({
      taskHover: !prevState.lineThrough
    }));
  }

  render(){
    let {todos} = this.props
    const spanClass = this.state.taskHover ? "fa fa-check float-right done-task" : "fa fa-spinner fa-spin float-right done-task"
    const inProgressToDos = todos.filter((todo) => todo.marked === false);
    const doneTask = todos.filter((todo) => todo.marked === true);
    const todoList = this.props.isShowMyPlan ? inProgressToDos : doneTask

    return(
      <div className="paper">
        <div className="text">
          <span className="task-title">
            {this.props.isShowMyPlan ? "Today Plan!" : "Task Completed!"}
          </span>
          <br /><br />
          <ol className="list-todos">
            {todoList.map(el => (
              <li key={el.id}>
                <span onClick={this.deleteTask.bind(this, el.id)}>{el.text}</span>
                <i
                  className={spanClass}
                  onMouseEnter={this.handleHover}
                  onMouseLeave={this.handleHover}
                  onClick={this.markTodo.bind(this, el.id)}
                />
                <span className="float-right done-task">8:14&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              </li>
            ))}
          </ol>
        </div>
        <div className="lines"></div>
        <div className="holes hole-top"></div>
        <div className="holes hole-middle"></div>
        <div className="holes hole-bottom"></div>
     </div>
  )};
}

function mapStateToProps(state){
  return {todos: state.toDoReducer}
}

const mapDispatchToProps = {
  delete: TodoActions.deleteTodo,
  doneTask: TodoActions.markTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);
