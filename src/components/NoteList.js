import React from "react"
import {connect} from 'react-redux';
class NoteList extends React.Component {
  render(){
    console.log(this.props)
    return(
      <div className="paper">
        <div className="text">
              <span className="task-title">
                Today Completed!
              </span>
              <br /><br />
              <ol className="list-todos">
                <li>
                  <span>Learn reactJS!</span>
                  <i className="fa fa-check float-right done-task"></i>
                  <span className="float-right done-task">8:14&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </li>
              </ol>
            </div>
        <div className="lines"></div>
        <div className="holes hole-top"></div>
        <div className="holes hole-middle"></div>
        <div className="holes hole-bottom"></div>
    </div>
  )};
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(NoteList);
