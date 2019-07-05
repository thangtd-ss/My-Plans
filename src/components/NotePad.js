import React from "react";
import {connect} from 'react-redux';
import * as TodoActions from "../actions/TodoActions"

class NotePad extends React.Component {
  constructor() {
    super()
    this.contentEditable = React.createRef();
    this.state = {html: "", todos: []};
    this.keyPress = this.keyPress.bind(this);
  };

  handleChange = event => {
    this.setState({html: event.target.value});
  };

  keyPress(e){
    let taskLists = this.state.html.split("\n");

    if(e.keyCode == 13){
      // this.props.clearAll()
      // let todos = []

      // taskLists.map(task => {
      //   if(task.length > 0){
      //     todos.push(task)
      //     this.props.addTodo(task)
      //   }
      // });

      // let old = this.props.toDoReducer
      let task = taskLists.pop()
      if(task.length >0)
        this.props.addTodo(task)
      // this.setState({
      //   todos
      // });
    }
  }

  render = () => {
    console.log(this.props)
    return (
      <div className="notepad">
        <div className="top">Add ToDos</div>
        <div className="paper-note">
          <textarea
            value={this.state.html}
            className="note-content row"
            onChange={this.handleChange}
            onKeyDown={this.keyPress}
          />
        </div>
      </div>
    )
  };
}

const mapStateToProps = state => state

const mapDispatchToProps = {...TodoActions}

export default connect(mapStateToProps, mapDispatchToProps)(NotePad);
