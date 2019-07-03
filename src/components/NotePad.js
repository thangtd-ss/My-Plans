import React from "react";
import ContentEditable from 'react-contenteditable';
import {connect} from 'react-redux';
import * as TodoActions from "../actions/TodoActions"

class NotePad extends React.Component {
  constructor() {
    super()
    this.contentEditable = React.createRef();
    this.state = {html: "", todos: []};
  };
 
  handleChange = event => {
    let keyCode = event.which || event.keyCode;
    let childNodes = event.target.children;
    console.log(childNodes)
  };
 
  render = () => {
    return (
    <div className="notepad">
    <div className="top">Add ToDos</div>
    <ContentEditable className="paper-note"
      innerRef={this.contentEditable}
      html={this.state.html} // innerHTML of the editable div
      disabled={false}       // use true to disable editing
      onKeyPress={this.handleChange} // handle innerHTML change
      tagName='article' // Use a custom HTML tag (uses a div by default)
    />
    </div>)
  };
}

const mapStateToProps = state => state

const mapDispatchToProps = {...TodoActions}

export default connect(mapStateToProps, mapDispatchToProps)(NotePad);
